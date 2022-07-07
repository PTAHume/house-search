import "./main-page.css";
import Header from "./header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeaturedHouse from "./featured-house";
import HouseFilter from "./house-filter";
import SearchResults from "../search-results/search-results";
import HouseFromQuery from "./house-from-query";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import HouseContext from "../context/houseContext";

export default function App() {
  const allHouses = useHouses();
  const featureHouse = useFeaturedHouse(allHouses);
  return (
    <Router>
      <HouseContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle="Proving houses all over the world" />
          <HouseFilter />
          <Routes>
            <Route path="/SearchResults/:country" element={<SearchResults />} />
            <Route path="/House/:country/:id" element={<HouseFromQuery />} />
            <Route
              path="/"
              element={<FeaturedHouse house={featureHouse}></FeaturedHouse>}
            />
          </Routes>
        </div>
      </HouseContext.Provider>
    </Router>
  );
}
