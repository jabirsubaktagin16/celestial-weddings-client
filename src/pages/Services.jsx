import { Parallax } from "react-parallax";
import { ServiceCard } from "../components/ServiceCard";
import useService from "../hooks/useService";

export const Services = () => {
  const [services, setServices] = useService();
  
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
