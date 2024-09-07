import { Parallax } from "react-parallax";
import { ServiceCard } from "../components/ServiceCard";
import { PageTitle } from "../components/Shared/PageTitle";
import useService from "../hooks/useService";

export const Services = () => {
  const [services, setServices] = useService();

  return (
    <>
      <PageTitle title={"Services"} />
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

      <div className="mt-6 flex justify-center mx-auto max-w-lg text-center">
        <p className="text-center text-gray-500 sm:mt-4 sm:block">
          Wedding planning include integrating key services such as floral
          arrangements, food, photography, and videography with professional
          planners, elegant transportation, and décor to guarantee a smooth,
          attractive celebration.
        </p>
      </div>
      <div className="my-10 flex min-h-screen items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services &&
            services.map((service) => (
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
    </>
  );
};
