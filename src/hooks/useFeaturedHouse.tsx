import { useMemo } from "react";
const useFeaturedHouse = ( allHouses: any ) => {
  return useMemo(() => {
    if (allHouses?.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses])
};
export default useFeaturedHouse;
