import { useEffect, useState } from "react";

export default function useService() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("./services.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      });
  }, []);

  return [services, setServices, isLoading];
}
