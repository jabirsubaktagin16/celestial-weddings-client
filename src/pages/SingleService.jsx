import { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { useParams } from "react-router-dom";
import services from "../../public/services.json";
import useVendorList from "../hooks/useVendorList";

export const SingleService = () => {
  const { shortForm } = useParams();
  const [service, setService] = useState(null);
  const [vendor, loading, refetch] = useVendorList();
  const currentServices = vendor.filter((v) => v.category === shortForm);

  useEffect(() => {
    const serviceData = services.find((item) => item.shortForm === shortForm);
    setService(serviceData);
  }, []);

  return (
    <div>
      <Parallax
        bgImage={service?.imageUrl}
        bgImageAlt="Services Banner"
        strength={300}
      >
        <div className="hero h-[250px] bg-cover bg-no-repeat mb-8 md:h-[400px]">
          <div className="hero-content text-center">
            <div className="max-w-100">
              <h1 className="mb-5 text-6xl text-white">{service?.title}</h1>
            </div>
          </div>
        </div>
      </Parallax>
      {currentServices.map((singleVendor) => (
        <p>Hello From Vendor</p>
      ))}
    </div>
  );
};
