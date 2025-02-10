import { RES_IMAGE } from "../utils/constants";
const RestaurantCard = ({ data }) => {
  return (
    <div className="res-container">
        <img src={RES_IMAGE + data.info.cloudinaryImageId} />
      <div className="res-body">
        <h2>{data.info.name}</h2>
        <div className="res-star">
          <h4>{data.info.avgRating}</h4>
          <h4>{ data.info.sla.slaString}</h4>
        </div>
        <p>{data.info.cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
