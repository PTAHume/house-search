import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const HouseFilter = ({ allHouses }: { allHouses: any }) => {
  const history = useNavigate();
  const countries = allHouses
    ? Array.from(new Set(allHouses.map((h: any) => h.country)))
    : [];
  countries.unshift(null);
  const location = useLocation();
  const [country, setCountry] = useState("");
  useEffect(() => {
    if (location.pathname.lastIndexOf("/") > 0) {
      setCountry(location.pathname.split("/")[2]);
    } else {
      setCountry("");
    }
  }, [location, country]);
  const onSearchChange = (e: any) => {
    const countryVal = e.target.value;
    history(`/SearchResults/${countryVal}`);
  };
  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in country:
      </div>
      <div className="col-md-4 mb-3">
        <select
          className="form-select"
          title="cCountry filter"
          value={country}
          onChange={onSearchChange}
        >
          {countries.map((c: any) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default HouseFilter;
