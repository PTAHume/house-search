import { useParams } from "react-router-dom";
import House from "../house";
const HouseFromQuery = ({ allHouses }: { allHouses: any }) => {
  const { id } = useParams();
  const house = allHouses.find((h: any) => h.id === parseInt(id!));
  return <House house={house} />;
};
export default HouseFromQuery;
/* ! It tells TypeScript that even though something looks like it could be null, it can trust you that it's not */
