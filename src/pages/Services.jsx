import { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { ServiceCard } from "../components/ServiceCard";

export const Services = () => {
  const [services, setServices] = useState([]);
  const getData = () => {
    fetch("services.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setServices(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Parallax
        bgImage="./services-banner.jpg"
        bgImageAlt="Services Banner"
        strength={300}
      >
        <div className="hero h-[250px] bg-cover bg-no-repeat mb-8 md:h-[400px]">
          <div className="hero-content text-center">
            <div className="max-w-100">
              <h1 className="mb-5 text-6xl text-white">Services</h1>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="mt-6 flex justify-center">
        <p className="text-center w-3/4">
          Planning a wedding involves coordinating essential services like
          stunning floral arrangements, delicious catering, and professional
          photography and videography. Our expert planners, luxurious
          transportation, and beautiful decor ensure a seamless and stylish
          celebration, while personalized invitations, custom cakes, and skilled
          hair and makeup artists enhance your special day. From elegant attire
          and exquisite jewelry to unique entertainment, every service is
          crafted to make your wedding unforgettable.
        </p>
      </div>
      <div className="container mx-auto my-6 md:px-28 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-x-10 gap-y-12">
        {services &&
          services.map((service) => (
            <ServiceCard
              key={service.shortForm}
              shortForm={service.shortForm}
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
            />
          ))}
      </div>
    </>
  );
};
