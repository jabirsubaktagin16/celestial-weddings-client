import { Link } from "react-router-dom";
import notFound from "../../assets/error.png";

export const NotFound = () => {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <div className="lg:w-4/12 mx-auto">
          <img src={notFound} alt="Not Found Error" />
        </div>
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We can't find that page.</p>
      </div>
      <Link
        to={"/"}
        className="text-center mt-6 inline-block rounded-none bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-opacity-85 focus:outline-none focus:ring"
      >
        Go Back Home
      </Link>
    </div>
  );
};
