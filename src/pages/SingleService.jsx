import { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { useParams } from "react-router-dom";
import services from "../../public/services.json";
import { VendorCard } from "../components/VendorCard";
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
      <div className="flex min-h-screen items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {currentServices &&
            currentServices.map((singleVendor) => (
              <VendorCard
                key={singleVendor._id}
                singleVendor={singleVendor}
                loading={loading}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
