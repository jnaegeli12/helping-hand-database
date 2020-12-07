import React, { useState, useEffect } from "react";
import API from '../utils/API'

function DailyCard() {

const [daily, setDaily] = useState([]);

  useEffect(() => {
    API.getDaily()
    .then(res => {
      setDaily(res.data)
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
      {daily.map(dailyOrgs => (
        <div className="card text-white bg-dark mb-3" key={dailyOrgs.id}>
          <div className="card-body">
            <div className="d-flex w-100 justify-content-between">
              <h3>{dailyOrgs.name}</h3>
              <span id="icons">{showFood(dailyOrgs)} {showShelter(dailyOrgs)} {showHealth(dailyOrgs)} {showDaily(dailyOrgs)}</span>
            </div>
            <h5><i>Address:</i> {dailyOrgs.address}, {dailyOrgs.city}, {dailyOrgs.state} {dailyOrgs.zip}<br />
            <i>Phone:</i> {dailyOrgs.phone_number}</h5>
            <p>{dailyOrgs.description}</p>
            <p><b>Service Type:</b> {showType(dailyOrgs)}<br />
              <b>Served Population:</b> {showPopulation(dailyOrgs)}<br />
              <b>Age Restrictions:</b> {dailyOrgs.age_min}&ndash;{dailyOrgs.age_max}</p>
            <a className="text-white" href={dailyOrgs.website}>Learn more at: {dailyOrgs.website}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default DailyCard;