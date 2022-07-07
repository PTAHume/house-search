import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const useSetCountry = () => {
  const location = useLocation();
  const [country, setCountry] = useState("");
  useEffect(() => {
    if (location.pathname.lastIndexOf("/") > 0) {
      setCountry(location.pathname.split("/")[2]);
    } else {
      setCountry("");
    }
  }, [location, country]);
  return country
};
export default useSetCountry;
