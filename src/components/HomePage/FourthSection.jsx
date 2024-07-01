import React from "react";
import { Link } from "react-router-dom";
import useService from "../../hooks/useService";
import { ServiceCard } from "../ServiceCard";

export const FourthSection = () => {
  const [services, setServices] = useService();
  return (
    <div className="my-20">
      <div className="flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
        <div className="text-sm font-bold tracking-wider text-primary uppercase">
          Services
        </div>
        <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-text lg:leading-tight lg:text-4xl ">
          Comprehensive Services for Your Special Day
        </h2>
        <p className="max-w-2xl py-2 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          Discover the wide range of services we offer to make your wedding
          truly unforgettable
        </p>
      </div>
      <div className="mb-10 flex min-h-screen items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services &&
            services
              .slice(0, 8)
              .map((service) => (
                <ServiceCard
                  key={service.shortForm}
                  shortForm={`/services/${service.shortForm}`}
                  imageUrl={service.imageUrl}
                  title={service.title}
                  description={service.description}
                />
              ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to="/services"
          className="text-center btn btn-wide btn-primary text-white rounded-none"
        >
          View More
        </Link>
      </div>
    </div>
  );
};
