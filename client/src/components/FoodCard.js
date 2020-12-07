import React, { useState, useEffect } from "react";
import API from '../utils/API'

function FoodCard() {

  const [food, setFood] = useState([]);

  useEffect(() => {
    API.getFood()
    .then(res => {
      setFood(res.data)
    })
    .catch((err) => console.log(err));
  }, []);

  function showFood(orgs) {
    if (orgs.served_meal === 1 || orgs.food_bank === 1) {
      return <img src="./assets/food-icon.png" width="50px" alt="food" />
    }
  }

  function showShelter(orgs) {
    if (orgs.immediate_shelter === 1 || orgs.longterm_shelter === 1) {
      return <img src="./assets/shelter-icon.png" width="50px" alt="shelter" />
    }
  }

  function showHealth(orgs) {
    if (orgs.urgent_care === 1 || orgs.mental === 1 || orgs.dental === 1) {
      return <img src="./assets/health-icon.png" width="50px" alt="health" />
    }
  }

  function showDaily(orgs) {
    if (orgs.daily === 1) {
      return <img src="./assets/daily-icon.png" width="50px" alt="daily" />
    }
  }

  function showType(orgs) {
    let types = [];

    if (orgs.served_meal === 1) {types.push("Served Meal")};
    if (orgs.food_bank === 1) {types.push("Food Bank")};
    if (orgs.immediate_shelter === 1) {types.push("Immediate Shelter")};
    if (orgs.longterm_shelter === 1) {types.push("Longer-term Shelter")};
    if (orgs.urgent_care === 1) {types.push("Urgent Care")};
    if (orgs.mental === 1) {types.push("Mental Health")};
    if (orgs.dental === 1) {types.push("Dental Care")};
    if (orgs.daily === 1) {types.push("Daily Services")};

    return types.join(', ');
  }

  function showPopulation(orgs) {
    let pop = [];

    if (orgs.male === 1) {pop.push("Men")}
    if (orgs.female === 1) {pop.push("Women")}
    if (orgs.family_youth === 1) {pop.push("Families/Youth")}

    return pop.join(', ');
  }

  return (
<div>
{food.map(foods => (
  <div className="card text-white bg-dark mb-3" key={foods.id}>
  <div className="card-body">
    <div className="d-flex w-100 justify-content-between">
      <h3>{foods.name}</h3>
      <span id="icons">{showFood(foods)} {showShelter(foods)} {showHealth(foods)} {showDaily(foods)}</span>
    </div>
    <h5><i>Address:</i> {foods.address}, {foods.city}, {foods.state} {foods.zip}<br />
    <i>Phone:</i> {foods.phone_number}</h5>
    <p>{foods.description}</p>
    <p><b>Service Type:</b> {showType(foods)}<br />
      <b>Served Population:</b> {showPopulation(foods)}<br />
      <b>Age Restrictions:</b> {foods.age_min}&ndash;{foods.age_max}</p>
    <a className="text-white" href={foods.website}>Learn more at: {foods.website}</a>
  </div>
</div>
))}
</div>
  );
}
export default FoodCard;