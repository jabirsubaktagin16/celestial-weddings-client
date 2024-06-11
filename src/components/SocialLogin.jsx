import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="flex justify-center gap-2 flex-col mb-4 lg:flex-row">
      <button
        onClick={() => handleGoogleSignIn()}
        className="btn gap-2 bg-transparent border-2 border-primary rounded-none hover:text-opacity-80 text-primary"
      >
        <FaGoogle />
        Sign In with Google
      </button>
    </div>
  );
};

export default SocialLogin;
