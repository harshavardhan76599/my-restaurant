import { RES_IMAGE } from "../utils/constants";
const ResturantCard = ({ data }) => {
  console.log(data);
  return (
    <div className="res-container">
      <div className="res-image">
        <img src={RES_IMAGE + props.data.card.card.info.cloudinaryImageId} />
      </div>
      <div className="res-body">
        <h2>Nandana Palace</h2>
      </div>
    </div>
  );
};

export default ResturantCard;
