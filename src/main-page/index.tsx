
import "./main-page.css";
import Header from "./header";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import FeaturedHouse from "./featured-house";
import HouseFilter from "./house-filter";
import SearchResults from "../search-results/search-results";
import HouseFromQuery from './house-from-query'
import useHouses from '../hooks/useHouses'
import useFeaturedHouse from "../hooks/useFeaturedHouse";
//useEffect - create side effect when stat of component changes
//useMemo - cache'ing
export default function App() {
  const allHouses = useHouses();
  const featureHouse = useFeaturedHouse(allHouses);
  // hooks should never be in a if/loop if between {} !!!
  return (
    <Router>
      <div className="container"> 
        <Header subtitle="Proving houses all over the world" />
        <HouseFilter allHouses={allHouses} />
        <Routes>
          <Route
            path="/SearchResults/:country"
            element={<SearchResults allHouses={allHouses} />}
          />
           <Route
            path="/House/:country/:id"
            element={<HouseFromQuery allHouses={allHouses} />}
          />
          <Route
            path="/"
            element={<FeaturedHouse house={featureHouse}></FeaturedHouse>}
          />
        </Routes>
      </div>
    </Router>
  );
}

/*
                    <Router>
always rendered  ->    <h1>Hi there</h1>
                      <Switch>
www.me.com/about ->    <Route exact path="/about"> exact prevent partial match
                        <About></About>
                        </Route>
www.me.com ->           <Route path="/">
                          <FeaturedHouse></FeaturedHouse>
                        </Route>
                      </Switch>
                    </Router>
*/
