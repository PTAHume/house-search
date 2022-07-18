import { useEffect, useState  } from "react";
const useHouses = () => {
    const [allHouses, setAllHouses] = useState([] as any);
    useEffect(() => {
      const fetchHouses =  async () => {
        const resp = await fetch("houses.json");
        const houses = await resp.json();
        setAllHouses(houses);
      }
      fetchHouses();
    }, []);
    return allHouses;
}
export default useHouses;
