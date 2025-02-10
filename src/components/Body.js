import RestaurantCard from "./ResturantCard";
import mockData from "../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_URL } from "../utils/constants";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

useEffect( ()=> {
  const fetchData = async ()=>{
    const response = await fetch(SWIGGY_URL);
    const result = await response.json();
    setFilteredData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurants(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  }; fetchData();

},[])

  const searchSubmit = () => {
    const data = restaurants.filter((item) => {
      return item?.info?.name.toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredData(data);
  };

  return filteredData ===null ? <h1>Loading...</h1> : (
    <div>
      <div className="search">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={searchSubmit}>Search</button>
      </div>
      <div className="body-of">
        {filteredData.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant?.info?.id}
              data={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
