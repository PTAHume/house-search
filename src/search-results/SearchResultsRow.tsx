import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";
const SearchResultsRow = ({ house }: { house: any }) => {
  const history = useNavigate();
  const setActive = () => {
    history(`/House/${house.country}/${house.id}`);
  };
  return (
    <tr onClick={setActive}>
      <td>{house.address}</td>
      <td>
        <NumericFormat
          value={house.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"£"}
        />
      </td>
      <td>{house.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
