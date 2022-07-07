import { useContext } from "react";
import { useParams } from "react-router-dom";
import House from "../house";
import HouseContext from "../context/houseContext";
const HouseFromQuery = () => {
  const { id } = useParams();
  const allHouses = useContext(HouseContext);
  const house =  allHouses.find((h: any) => h.id === parseInt(id!)) as unknown as object;
  return <House house={house} />;
};
export default HouseFromQuery;
