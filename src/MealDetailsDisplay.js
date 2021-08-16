import React, { useState, useEffect } from "react";
import axios from "axios";

const MealDetailsDisplay = (props) => {
  const [mealDetail, setMealDetail] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`
      )
      .then((response) => {
        setMealDetail(response.data.meals[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(mealDetail);
  return (
    <div className="mealDetailsWrapper">
      {/* <h3>{props.match.params.id}</h3> */}
      <h1 className="mealDetailsName">{mealDetail.strMeal}</h1>
      <img
        className="mealDetailImage"
        src={mealDetail.strMealThumb}
        alt={mealDetail.strMeal}
      />
      <h2 className="mealDetailsName">Ingredients</h2>
      <div>
        <ul className="mealDetailsList">
          <li className="mealDetailsLi">
            {mealDetail.strIngredient1} - {mealDetail.strMeasure1}
          </li>
          <li className="mealDetailsLi">
            {mealDetail.strIngredient2} - {mealDetail.strMeasure2}
          </li>
          <li className="mealDetailsLi">
            {mealDetail.strIngredient3} - {mealDetail.strMeasure3}
          </li>
          <li className="mealDetailsLi">
            {mealDetail.strIngredient4} - {mealDetail.strMeasure4}
          </li>
          <li className="mealDetailsLi">
            {mealDetail.strIngredient5} - {mealDetail.strMeasure5}
          </li>
          <li>and more...</li>
          <li>Write to us to get the entire list ;)</li>
        </ul>
      </div>
      <div className="mealDetailsInstrWrapper">
        <h2 className="mealDetailsName">Instructions</h2>
        <p>{mealDetail.strInstructions}</p>
      </div>
    </div>
  );
};
export default MealDetailsDisplay;
