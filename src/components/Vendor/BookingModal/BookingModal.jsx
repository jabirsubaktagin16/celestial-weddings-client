import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import { AuthContext } from "../../../providers/AuthProvider";
import { BookingInputComponent } from "./BookingInputComponent";

export const BookingModal = ({ _package, setPackage }) => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit, reset } = useForm();
  const [userInfo, userLoading, userRefetch] = useUser.userDetails(
    user?.email || ""
  );

  const axiosSecure = useAxiosSecure();
  const [selected, setSelected] = useState(new Date());

  const onSubmit = async (data) => {
    const bookingInfo = {
      brideName: data?.brideName,
      groomName: data?.groomName,
      email: user?.email,
      contactNumber: data?.contactNumber,
      eventDate: data?.eventDate,
      packageId: _package?._id,
      venueName: data?.venueName,
    };
    const bookingRes = await axiosSecure.post("/bookings", bookingInfo);

    if (bookingRes.data.response._id) {
      reset();
      toast.success(
        `Your Booking has been added, Please wait for the approval`
      );
    } else {
      toast.error("There was an error. Please try again");
    }
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box rounded-none bg-white w-11/12 max-w-5xl">
          <div className="modal-action">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              <ImCross />
            </label>
          </div>
          <h3 className="text-lg font-bold text-center">
            Book the Package {_package?.name}
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 grid grid-cols-6 gap-6"
          >
            <div className="col-span-6 sm:col-span-3">
              <BookingInputComponent
                labelTitle={"Bride Name"}
                id={"brideName"}
                name={"brideName"}
                register={register}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <BookingInputComponent
                labelTitle={"Groom Name"}
                id={"groomName"}
                name={"groomName"}
                register={register}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <BookingInputComponent
                labelTitle={"Contact Number"}
                id={"contactNumber"}
                name={"contactNumber"}
                register={register}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <BookingInputComponent
                type="datetime-local"
                labelTitle={"Event Date"}
                id={"eventDate"}
                name={"eventDate"}
                defaultValue={selected}
                register={register}
              />
            </div>
            <div className="col-span-6">
              <BookingInputComponent
                labelTitle={"Venue Name"}
                id={"venueName"}
                name={"venueName"}
                register={register}
              />
            </div>
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <input
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
