import { useParams, useNavigate } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = ({ allHouses }: { allHouses: any }) => {
  const { country } = useParams();
  const history = useNavigate();
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
          <th>Property:</th>
          <th>Price:</th>
          <th>Likes:</th>
        </thead>
        <tbody>
          {filteredHouses.map((h: any) => {
            return <SearchResultsRow key={h.id} house={h}></SearchResultsRow>;
          })}
        </tbody>
        <tfoot>
          <button className="btn btn-primary mt-2" onClick={handleBackClick}>
            Back Home
          </button>
        </tfoot>
      </table>
    </div>
  );
};
export default SearchResults;
