import React, { useContext, useState } from "react";
import errorFile from "../../../assets/error-file.png";
import { MyReviewCard } from "../../../components/MyReviewCard";
import { Loading } from "../../../components/Shared/Loading";
import { PageTitle } from "../../../components/Shared/PageTitle";
import { ReviewModal } from "../../../components/Vendor/ReviewModal/ReviewModal";
import useUser from "../../../hooks/useUser";
import { AuthContext } from "../../../providers/AuthProvider";

export const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, userLoading, userRefetch] = useUser.userDetails(user?.email);
  const [reviews, loading, reviewRefetch] = useUser.reviewList(userInfo?._id);
  const [vendor, setVendor] = useState(null);
  const [review, setReview] = useState(null);

  if (userLoading || loading) return <Loading />;

  return (
    <>
      <PageTitle title={"My Reviews"} />
      <section className="">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              My Reviews
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:gap-2">
            {reviews &&
              reviews.length > 0 &&
              reviews.map((review) => (
                <MyReviewCard
                  key={review?._id}
                  review={review}
                  setVendor={setVendor}
                  setReview={setReview}
                  refetch={reviewRefetch}
                />
              ))}
          </div>

          {reviews && reviews.length === 0 && (
            <div className="relative w-full h-[300px] bg-base-100 flex justify-center items-center sm:mt-4 p-4">
              <div className="text-center flex flex-col justify-center items-center">
                <img
                  src={errorFile}
                  className="w-10 sm:w-20 lg:w-24 mb-2"
                  alt="Error Icon"
                />
                <span className="text-accent text-sm sm:text-base lg:text-lg">
                  No Data Available
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
      <ReviewModal vendor={vendor} refetch={reviewRefetch} review={review} />
    </>
  );
};
