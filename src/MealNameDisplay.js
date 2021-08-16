import react from "react";
import { Link } from "react-router-dom";

const MealNameDisplay = ({ id, name, category }) => {
  return (
    <div className="mealContainer">
      <div className="mealNameWrapper">
        <Link to={`/meals/${id}`}>
          <img className="mealNameImage" src="./img/fried.png" alt="{name}" />
          <div>
            <h3 className="mealName">{name}</h3>
            <h5 className="category">{category}</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default MealNameDisplay;
