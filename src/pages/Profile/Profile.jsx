import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { IoIosCamera } from "react-icons/io";
import avatar from "../../assets/user_avatar.png";
import { ProfileInputComponent } from "../../components/InputComponent/ProfileInputComponent";
import { Loading } from "../../components/Shared/Loading";
import { PageTitle } from "../../components/Shared/PageTitle";
import useUser from "../../hooks/useUser";
import { AuthContext } from "../../providers/AuthProvider";

export const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, userLoading, userRefetch] = useUser.userDetails(user.email);
  const { register, handleSubmit, reset } = useForm();

  if (userLoading) return <Loading />;

  return (
    <div>
      <PageTitle title={"My Profile"} />
      <section className="py-10 my-auto ">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-none h-fit self-center ">
            <div className="">
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-extrabold mb-2 text-primary text-center">
                My Profile
              </h1>

              <form className="grid grid-cols-6 gap-6">
                <div className="col-span-6 w-full rounded-sm items-center">
                  <div className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full relative">
                    <img
                      src={user.image ? user.image : avatar}
                      alt="User Avatar"
                      className="w-[141px] h-[141px] rounded-full object-cover"
                    />

                    <div className="absolute bg-white/90 rounded-full w-6 h-6 text-center bottom-0 right-0 flex justify-center items-center">
                      <input
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
                </div>

                <ProfileInputComponent
                  id={"name"}
                  labelTitle={"Name"}
                  value={userInfo?.name}
                  placeholder={"Enter your Name"}
                  register={register}
                />
                <ProfileInputComponent
                  id={"email"}
                  doubleColumn={true}
                  labelTitle={"E-Mail"}
                  value={userInfo?.email}
                  placeholder={"Enter your E-Mail"}
                  register={register}
                  disabled
                />
                <ProfileInputComponent
                  id={"phoneNumber"}
                  doubleColumn={true}
                  labelTitle={"Contact Number"}
                  value={userInfo?.phoneNumber || ""}
                  placeholder={"Enter your Contact Number"}
                  register={register}
                />
                <ProfileInputComponent
                  id={"address"}
                  labelTitle={"Address"}
                  value={userInfo?.address}
                  placeholder={"Enter your Address"}
                  register={register}
                />
                <ProfileInputComponent
                  id={"occupation"}
                  labelTitle={"Occupation"}
                  value={userInfo?.occupation}
                  placeholder={"Enter your Occupation"}
                  register={register}
                />
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
        </div>
      </section>
    </div>
  );
};
