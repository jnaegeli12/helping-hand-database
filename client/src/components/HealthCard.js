import React, { useState, useEffect } from "react";
import API from '../utils/API'

function HealthCard() {

const [health, setHealth] = useState([]);

  useEffect(() => {
    API.getHealth()
    .then(res => {
      setHealth(res.data)
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
      {health.map(healthOrgs => (
        <div className="card text-white bg-dark mb-3" key={healthOrgs.id}>
          <div className="card-body">
            <div className="d-flex w-100 justify-content-between">
              <h3>{healthOrgs.name}</h3>
              <span id="icons">{showFood(healthOrgs)} {showShelter(healthOrgs)} {showHealth(healthOrgs)} {showDaily(healthOrgs)}</span>
            </div>
            <h5><i>Address:</i> {healthOrgs.address}, {healthOrgs.city}, {healthOrgs.state} {healthOrgs.zip}<br />
            <i>Phone:</i> {healthOrgs.phone_number}</h5>
            <p>{healthOrgs.description}</p>
            <p><b>Service Type:</b> {showType(healthOrgs)}<br />
              <b>Served Population:</b> {showPopulation(healthOrgs)}<br />
              <b>Age Restrictions:</b> {healthOrgs.age_min}&ndash;{healthOrgs.age_max}</p>
            <a className="text-white" href={healthOrgs.website}>Learn more at: {healthOrgs.website}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default HealthCard;