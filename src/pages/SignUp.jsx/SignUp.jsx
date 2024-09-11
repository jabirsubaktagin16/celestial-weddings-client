import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import signUpBanner from "../../../public/signup-banner.jpg";
import logoWhite from "../../assets/logo-white.png";
import logo from "../../assets/logo.png";
import { PageTitle } from "../../components/Shared/PageTitle";
import SocialLogin from "../../components/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";

export const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [submissionDisable, setSubmissionDisable] = useState(true);

  const heading = "Welcome to Celestial Weddings";
  const paragraph =
    "Join us and unlock a world of wedding services at your fingertips. Create an account to browse vendors, book services, and manage your wedding plans seamlessly. It's quick and easy—just fill out your details, and you’re all set to get started!";

  const onSubmit = (data) => {
    const fullName = `${data.firstName} ${data.lastName}`;

    if (data.password !== data.passwordConfirmation) {
      toast.error("Password and Confirmation Password must be the same");
    } else {
      createUser(data.email, data.password).then((result) => {
        updateUserProfile(fullName, data.photoURL)
          .then(() => {
            // create user entry in the database
            const userInfo = {
              name: fullName,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                toast.success("User added successfully");
                navigate("/");
              }
            });
          })
          .catch((error) => toast.error(error));
      });
    }
  };

  const changeDisable = () => {
    setSubmissionDisable(!submissionDisable);
  };

  return (
    <>
      <PageTitle title={"Sign Up"} />
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Sign Up Banner"
              src={signUpBanner}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <Link className="block text-white" to="/">
                <div className="w-48">
                  <img src={logoWhite} />
                </div>
              </Link>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                {heading}
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">{paragraph}</p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <Link
                  className="inline-flex size-16 items-center justify-center rounded-full bg-white sm:size-20"
                  to="/"
                >
                  <div className="w-16">
                    <img src={logo} />
                  </div>
                </Link>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  {heading}
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  {paragraph}
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="firstName"
                    className="input input-bordered bg-transparent rounded-none mt-1 w-full text-sm text-gray-700"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <span className="text-red-600">First Name is required</span>
                  )}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="input input-bordered bg-transparent rounded-none mt-1 w-full text-sm text-gray-700"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <span className="text-red-600">Last Name is required</span>
                  )}
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="input input-bordered bg-transparent rounded-none mt-1 w-full text-sm text-gray-700"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="input input-bordered bg-transparent rounded-none mt-1 w-full text-sm text-gray-700"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password Confirmation
                  </label>

                  <input
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="input input-bordered bg-transparent rounded-none mt-1 w-full text-sm text-gray-700"
                    {...register("passwordConfirmation", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                    })}
                  />
                  {errors.passwordConfirmation?.type === "required" && (
                    <p className="text-red-600">
                      Confirmation Password is required
                    </p>
                  )}
                  {errors.passwordConfirmation?.type === "minLength" && (
                    <p className="text-red-600">
                      Confirmation Password must be 6 characters
                    </p>
                  )}
                  {errors.passwordConfirmation?.type === "maxLength" && (
                    <p className="text-red-600">
                      Confirmation Password must be less than 20 characters
                    </p>
                  )}
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      onChange={changeDisable}
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      By creating an account, you agree to our terms and
                      conditions and privacy policy .
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <button
                    type="submit"
                    className="inline-block shrink-0 w-full border border-accent bg-accent bg-opacity-100 px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring active:text-accent hover:bg-transparent hover:text-accent disabled:bg-opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent disabled:hover:text-white"
                    disabled={submissionDisable}
                  >
                    Create an account
                  </button>
                </div>
              </form>
              <span className="relative flex justify-center my-4">
                <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

                <span className="relative z-10 bg-white px-6">Or</span>
              </span>
              <SocialLogin />
              <div className="col-span-6 mt-4">
                <p className="mt-4 text-sm text-gray-500 sm:mt-0 text-center">
                  Already have an account?{" "}
                  <Link to="/sign-in" className="text-gray-700 underline">
                    Sign in
                  </Link>
                  .
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};
