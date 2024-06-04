import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ServiceCard } from "../ServiceCard";

export const ThirdSection = () => {
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
    <div className="my-20">
      <h2 className="text-center text-accent">Find Trusted Vendor</h2>
      <div className="container mx-auto mt-6 md:px-28 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-x-10 gap-y-12">
        {services &&
          services
            .slice(0, 8)
            .map((service) => (
              <ServiceCard
                key={service.shortForm}
                shortForm={service.shortForm}
                imageUrl={service.imageUrl}
                title={service.title}
                description={service.description}
              />
            ))}
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
