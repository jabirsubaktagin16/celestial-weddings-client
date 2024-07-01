import React from "react";
import { useParams } from "react-router-dom";
import { PageTitle } from "../components/Shared/PageTitle";
import { ContactUs } from "../components/Vendor/ContactUs";
import { PackageCard } from "../components/Vendor/PackageCard";
import { ReviewCard } from "../components/Vendor/ReviewCard";
import { VendorRatings } from "../components/Vendor/VendorRatings";
import usePackages from "../hooks/usePackages";
import useVendorDetails from "../hooks/useVendorDetails";

export const SingleVendor = () => {
  const { id } = useParams();

  const [vendor, loading, refetch] = useVendorDetails({ id });
  const [packageList, packageLoading, packageRefetch] = usePackages(id);

  return (
    <>
      <PageTitle title={vendor?.name ? vendor.name : ""} />
      <div
        className="hero h-[250px] md:h-[350px]"
        style={{
          backgroundImage: `url(${vendor?.cover})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-white text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{vendor?.name}</h1>
            <p className="mb-5">{vendor?.description}</p>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
          <div className="text-sm font-bold tracking-wider text-primary uppercase">
            Packages
          </div>
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-text lg:leading-tight lg:text-4xl ">
            Tailored Packages for Your Perfect Day
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
            Explore our carefully curated packages designed to make your wedding
            unforgettable
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packageList &&
              packageList.map((singlePackage) => (
                <PackageCard
                  key={singlePackage?._id}
                  availablePackage={singlePackage}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
          <div className="text-sm font-bold tracking-wider text-primary uppercase">
            Testimonials
          </div>
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-text lg:leading-tight lg:text-4xl ">
            What Our Happy Couples Are Saying
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">
            Experience the magic of {vendor?.name} the words of our delighted
            clients
          </p>
        </div>
        <VendorRatings vendor={vendor} />
        <div className="container p-6 mx-auto mb-10 xl:px-0">
          <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mx-20">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
          <div className="text-sm font-bold tracking-wider text-primary uppercase">
            Contact
          </div>
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-text lg:leading-tight lg:text-4xl ">
            Get in Touch
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">
            Reach out to us today to discuss your vision and start your journey
            with {vendor?.name}
          </p>
        </div>
        <ContactUs vendor={vendor} />
      </div>
    </>
  );
};
