import ResturantCard from "./ResturantCard";
import mockData from "../utils/mockData";
const Body = () => {
  return (
    <div>
      {mockData.map((resturant) => {
        console.log("body");
        <ResturantCard data={resturant} />;
      })}
    </div>
  );
};

export default Body;
