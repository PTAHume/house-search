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
/*
ver 1
  const fetchHouses = useCallback( async () => {
    const resp = await fetch("houses.json");
    const houses = await resp.json();
    setAllHouses(houses);
  }, [])
  useEffect(() => {
    fetchHouses();
  }, [fetchHouses]);
ver 2
useEffect(() => {
  const fetchHouses =  async () => {
    const resp = await fetch("houses.json");
    const houses = await resp.json();
    setAllHouses(houses);
  }
  fetchHouses();
}, []);
*/