import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import { PageTitle } from "../../components/Shared/PageTitle";
import SocialLogin from "../../components/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";

export const SignIn = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log("state in the location login page", location.state);

  const handleLogin = (data) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      console.log(result);
      const user = result.user;
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <PageTitle title={"Sign In"} />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(./signin-banner.jpeg)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-60"></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <p className="py-6">
              Welcome back! Sign in to your account to access personalized
              features, manage your bookings, and explore services tailored to
              your needs. Simply enter your credentials to continue. If you
              haven’t registered yet, click on the sign-up link below to create
              your account.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-white rounded-none">
            <form className="card-body" onSubmit={handleLogin}>
              <InputComponent
                placeholder={"Your E-Mail"}
                id={"email"}
                label={"Email"}
                name={"email"}
                type={"email"}
              />
              <InputComponent
                placeholder={"Your Password"}
                id={"password"}
                label={"Password"}
                name={"password"}
                type={"password"}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div className="form-control">
                <button className="btn btn-primary rounded-none text-white">
                  Sign In
                </button>
              </div>
            </form>
            <SocialLogin />
            <p className="text-center mb-5">
              <small>
                New to Celestial Weddings?{" "}
                <Link className="text-primary" to="/sign-up">
                  Create New Account
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
