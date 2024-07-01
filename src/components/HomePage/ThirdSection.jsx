import third1 from "../../assets/third_1.jpg";
import third2 from "../../assets/third_2.jpg";

export const ThirdSection = () => {
  return (
    <section>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            We didn't reinvent the wheel
          </h2>
          <p className="mb-4">
            We are planners, designers, and coordinators. Visionaries and
            detail-oriented problem solvers. Small enough to provide
            personalized attention and quick responses, yet big enough to handle
            weddings of any size and scope. We bring your dream wedding to life
            with efficiency and elegance.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src={third1} alt="" />
          <img className="mt-4 w-full lg:mt-10 rounded-lg" src={third2} />
        </div>
      </div>
    </section>
  );
};
