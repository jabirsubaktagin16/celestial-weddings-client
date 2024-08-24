import { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { useParams } from "react-router-dom";
import services from "../../public/services.json";
import { Loading } from "../components/Shared/Loading";
import { PageTitle } from "../components/Shared/PageTitle";
import { VendorCard } from "../components/VendorCard";
import useVendor from "../hooks/useVendor";

export const SingleService = () => {
  const { shortForm } = useParams();
  const [service, setService] = useState(null);
  const [vendor, loading, refetch] = useVendor.vendorList();
  const currentServices = vendor.filter((v) => v.category === shortForm);

  useEffect(() => {
    const serviceData = services.find((item) => item.shortForm === shortForm);
    setService(serviceData);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <PageTitle title={service?.title ? service.title : ""} />
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
        {currentServices && currentServices.length === 0 && (
          <div className="flex items-center justify-center">
            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
              No Vendor Found
            </p>
          </div>
        )}
        {currentServices && currentServices.length > 0 && (
          <div className="flex min-h-screen items-center justify-center">
            (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-10 md:mx-20">
              {currentServices.map((singleVendor) => (
                <VendorCard
                  key={singleVendor._id}
                  singleVendor={singleVendor}
                />
              ))}
            </div>
            )
          </div>
        )}
      </div>
    </>
  );
};
