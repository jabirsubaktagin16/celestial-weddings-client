import { Link } from "react-router-dom";
import useService from "../../hooks/useService";
import { ServiceCard } from "../ServiceCard";

export const ThirdSection = () => {
  const [services, setServices] = useService();

  return (
    <div className="my-20">
      <h2 className="text-center text-accent">Find Trusted Vendor</h2>
      <div className="my-10 flex min-h-screen items-center justify-center">
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
