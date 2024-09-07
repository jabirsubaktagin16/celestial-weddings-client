import { Parallax } from "react-parallax";
import aboutUs from "../assets/about-us.png";
import { PageTitle } from "../components/Shared/PageTitle";

export const AboutUs = () => {
  return (
    <>
      <PageTitle title={"About Us"} />
      <Parallax
        bgImage="./about-us-banner.jpg"
        bgImageAlt="About Us Banner"
        strength={300}
      >
        <div className="hero h-[250px] bg-cover bg-no-repeat mb-8 md:h-[400px]">
          <div className="hero-content text-center">
            <div className="max-w-100">
              <h1 className="mb-5 text-6xl text-white">About Us</h1>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 my-10 items-center">
        <div>
          <img src={aboutUs} alt="About Us Background" />
        </div>
        <div className="md:px-20 px-10 text-start">
          <h2 className="text-4xl barlow-font uppercase font-bold">
            About Celestial Weddings
          </h2>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="divider lg:divider-horizontal "></div>
          </div>
          <p className="my-5 text-gray-500">
            Welcome to Celestial Weddings, where we turn your dream wedding into
            a breathtaking reality. With a passion for perfection and an eye for
            detail, our team of experts is dedicated to crafting unforgettable
            experiences. From elegant floral arrangements and gourmet catering
            to professional photography and exquisite venues, we provide a
            comprehensive range of services tailored to your unique vision.
          </p>
          <p className="my-5 text-gray-500">
            At Celestial Weddings, we believe that every couple deserves a
            celebration as unique as their love story. Our seasoned planners,
            talented decorators, and skilled stylists work tirelessly to ensure
            every aspect of your special day is flawlessly executed. Whether
            you&lsquo;re envisioning an intimate gathering or a grand affair, we
            are committed to making your wedding day truly celestial.
          </p>
          <p className="text-gray-500">
            Join us in creating a magical celebration that you and your guests
            will cherish forever. With Celestial Weddings, your perfect day is
            just a step away.
          </p>
        </div>
      </div>
    </>
  );
};
