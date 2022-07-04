import React, { useEffect, useState, useMemo } from "react";
import "./main-page.css";
import Header from "./header";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import FeaturedHouse from "./featured-house";

function App() {
  const [allHouses, setAllHouses] = useState([]);

const foo =  useEffect(() => {
    const fetchHouses = async () => {
      const resp = await fetch("../../public/houses.json");
      const houses = await resp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featureHouses = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  /*
                    <Router>
always rendered  ->    <h1>Hi there</h1>
                      <Switch>
www.me.com/about ->    <Route path="/about">
                          <About></About>
                        </Route>
www.me.com ->           <Route path="/">
                          <FeaturedHouse></FeaturedHouse>
                        </Route>
                      </Switch>
                    </Router>
*/

  return (
    <Router>
      <div className="container">
        <Header subtitle="Proving houses all over the world" />
        <Routes>
          <Route path="/">
            <FeaturedHouse house={featureHouses}></FeaturedHouse>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
