import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import services from "../../public/services.json";
import { PageTitle } from "../components/Shared/PageTitle";
import { VendorCard } from "../components/VendorCard";
import useVendor from "../hooks/useVendor";
import { utilFunctions } from "../utils/utilFunctions";

export const SingleService = () => {
  const { shortForm } = useParams();
  const [service, setService] = useState(null);
  const [vendor, loading, refetch] = useVendor.vendorList();
  const currentServices = vendor.filter((v) => v.category === shortForm);

  const { getCategoryFullForm } = utilFunctions();

  const categoryFullForm = getCategoryFullForm(shortForm);

  useEffect(() => {
    const serviceData = services.find((item) => item.shortForm === shortForm);
    setService(serviceData);
  }, []);

  return (
    <>
      <PageTitle title={categoryFullForm} />
      <section>
        <div
          className="hero h-[250px] md:h-[350px]"
          style={{
            backgroundImage: `url(${service?.imageUrl})`,
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-60"></div>
          <div className="hero-content text-white text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold">{categoryFullForm}</h1>
            </div>
          </div>
        </div>
        {currentServices && currentServices.length === 0 && (
          <div className="flex items-center justify-center">
            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
              No Vendor Found
            </p>
          </div>
        )}
        {currentServices && currentServices.length > 0 && (
          <div className="flex min-h-screen items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-10 md:mx-20">
              {currentServices.map((singleVendor) => (
                <VendorCard
                  key={singleVendor._id}
                  singleVendor={singleVendor}
                  loading={loading}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};
