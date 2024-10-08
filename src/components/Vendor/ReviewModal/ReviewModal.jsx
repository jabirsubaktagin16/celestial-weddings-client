import { Rating } from "@smastrom/react-rating";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import { AuthContext } from "../../../providers/AuthProvider";

export const ReviewModal = ({ vendor, refetch, review }) => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [reviewDescription, setReviewDescription] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [userInfo, userLoading, userRefetch] = useUser.userDetails(
    user?.email || ""
  );
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setRating(review?.rating);
    setReviewDescription(review?.reviewDescription);
  }, [review]);

  const onSubmit = async (data) => {
    const reviewInfo = {
      vendorId: vendor?._id,
      userId: userInfo?._id,
      rating: rating,
      reviewDescription: data.description,
    };

    if (!review) {
      const reviewRes = await axiosSecure.post("/reviews", reviewInfo);

      if (reviewRes.data.response._id) {
        reset();
        setRating(0);
        refetch();
        toast.success(`Review has been added successfully`);

        document.getElementById("review-modal").checked = false;
      }
    } else {
      const reviewRes = await axiosSecure.patch(
        `/reviews/update/${review?._id}`,
        reviewInfo
      );

      if (reviewRes.data?.response.modifiedCount > 0) {
        refetch();
        reset();
        toast.success(`Review has been updated successfully`);

        document.getElementById("review-modal").checked = false;
      }
    }
  };

  return (
    <>
      <input type="checkbox" id="review-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box rounded-none bg-white">
          <div className="modal-action">
            <label
              htmlFor="review-modal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              <ImCross />
            </label>
          </div>
          <h3 className="text-lg font-bold text-center">
            Write a review on {vendor?.name}
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 grid grid-cols-6 gap-6"
          >
            <div className="col-span-6">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700 text-center"
              >
                Rate {vendor?.name}
              </label>

              <Rating
                style={{
                  maxWidth: 180,
                  marginTop: "0.25rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                value={rating}
                onChange={setRating}
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>

              <textarea
                defaultValue={reviewDescription}
                id="description"
                className="bg-transparent textarea textarea-primary resize-none mt-1 w-full rounded-none text-sm text-gray-700"
                placeholder="Write Down Your Review"
                rows={5}
                {...register("description", { required: true })}
              ></textarea>
            </div>

            <div
              className={`${
                userInfo?.role === "admin" && "tooltip tooltip-secondary"
              } col-span-6 sm:flex sm:items-center sm:gap-4`}
              data-tip="You are not allowed to post review"
            >
              <input
                disabled={userInfo?.role === "admin"}
                type="submit"
                role="button"
                className="btn btn-primary rounded-none w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
