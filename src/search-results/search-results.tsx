import {  useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";
import HouseContext from "../context/houseContext";

const SearchResults = () => {
  const { country } = useParams();
  const history = useNavigate();
  const allHouses = useContext(HouseContext);
  const filteredHouses = allHouses.filter((h: any) => {
    return h.country === country;
  });
  const handleBackClick = () => {
    history(`/`);
  };
  return (
    <div className="mt-2">
      <h4>Results for {country}:</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Property:</td>
            <td>Price:</td>
            <td>Likes:</td>
          </tr>
        </thead>
        <tbody>
          {filteredHouses.map((h: any) => {
            return <SearchResultsRow key={h.id} house={h}></SearchResultsRow>;
          })}
        </tbody>
        <tfoot>
          <tr>
            <td style={{borderStyle:'none'}} colSpan={3}>
              <button
                className="btn btn-primary mt-2"
                onClick={handleBackClick}
              >
                Back Home
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default SearchResults;
