import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MealNameDisplay from "./MealNameDisplay";

const MealsListDisplay = () => {
  const [mealList, setMealList] = useState([]);

  const getMeals = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v2/9973533/randomselection.php`)
      .then((response) => {
        setMealList(response.data.meals);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button className="getMealsButton" onClick={getMeals}>
        Click To Get 10 Recipes!!
      </button>
      <div className="displayWrapper">
        {mealList.map((item, index) => (
          <MealNameDisplay
            id={item.idMeal}
            name={item.strMeal}
            category={item.strCategory}
            instructions={item.strInstructions}
            image={item.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
};
export default MealsListDisplay;
