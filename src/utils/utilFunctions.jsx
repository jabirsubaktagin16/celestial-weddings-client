import services from "../../public/services.json";

export const utilFunctions = () => {
  const getCategoryFullForm = (shortForm) => {
    const service = services.find((service) => service.shortForm === shortForm);
    return service ? service.title : "Unknown Category";
  };

  return { getCategoryFullForm };
};
