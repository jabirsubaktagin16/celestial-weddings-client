import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoIosCamera } from "react-icons/io";
import avatar from "../../assets/user_avatar.png";
import { ProfileInputComponent } from "../../components/InputComponent/ProfileInputComponent";
import { Loading } from "../../components/Shared/Loading";
import { PageTitle } from "../../components/Shared/PageTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUser from "../../hooks/useUser";
import { AuthContext } from "../../providers/AuthProvider";
import { utilFunctions } from "../../utils/utilFunctions";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, userLoading, userRefetch] = useUser.userDetails(user.email);
  const [image, setImage] = useState(userInfo?.image || avatar);
  const [isUploading, setIsUploading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const { handleFileChange } = utilFunctions();

  if (userLoading) return <Loading />;

  const formSubmit = async (data) => {
    const userInfo = {
      name: data.myName,
      image: image ? image : "",
      phoneNumber: data.phoneNumber,
      address: data.address,
      occupation: data.occupation,
    };

    console.log(userInfo);

    const userRes = await axiosSecure.patch(
      `/users/update/${user.email}`,
      userInfo
    );

    console.log(userRes);

    if (userRes.data?.response.modifiedCount > 0) {
      userRefetch();
      toast.success(`Profile updated successfully`);
    }
  };

  return (
    <>
      <PageTitle title={"My Profile"} />
      <section className="py-10 my-auto ">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-none h-fit self-center ">
            <div className="">
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-extrabold mb-2 text-primary text-center">
                My Profile
              </h1>

              <form
                onSubmit={handleSubmit(formSubmit)}
                className="grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 w-full rounded-sm items-center">
                  {isUploading && <p>Image Loading</p>}
                  {!isUploading && (
                    <div className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full relative  ring-primary ring-offset-base-100  ring ring-offset-2">
                      <img
                        src={image}
                        alt="User Avatar"
                        className="w-[141px] h-[141px] rounded-full object-cover"
                      />

                      <div className="absolute bg-white/90 rounded-full w-6 h-6 text-center bottom-0 right-0 flex justify-center items-center">
                        <input
                          onChange={(e) =>
                            handleFileChange(
                              "profile",
                              e,
                              setImage,
                              setIsUploading
                            )
                          }
                          type="file"
                          name="profile"
                          id="upload_profile"
                          hidden
                        />

                        <label
                          className="cursor-pointer"
                          htmlFor="upload_profile"
                        >
                          <IoIosCamera className="text-accent" />
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                <ProfileInputComponent
                  name={"myName"}
                  labelTitle={"Name"}
                  value={userInfo?.name}
                  placeholder={"Enter your Name"}
                  register={register}
                />
                <ProfileInputComponent
                  doubleColumn={true}
                  name={"email"}
                  labelTitle={"E-Mail Address"}
                  value={userInfo?.email}
                  placeholder={"Enter your E-Mail Address"}
                  register={register}
                  readOnly
                />
                <ProfileInputComponent
                  name={"phoneNumber"}
                  doubleColumn={true}
                  labelTitle={"Contact Number"}
                  value={userInfo?.phoneNumber || ""}
                  placeholder={"Enter your Contact Number"}
                  register={register}
                />
                <ProfileInputComponent
                  name={"address"}
                  labelTitle={"Address"}
                  value={userInfo?.address || ""}
                  placeholder={"Enter your Address"}
                  register={register}
                />

                <ProfileInputComponent
                  name={"occupation"}
                  labelTitle={"Occupation"}
                  value={userInfo?.occupation || ""}
                  placeholder={"Enter your Occupation"}
                  register={register}
                />

                <button
                  type="submit"
                  className="btn btn-primary rounded-none w-full"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
