import axios from "axios";

const API =  {
  // Gets all organizations
  getAll: function() {
    return axios.get("/api/all");
  },
  // Gets all food organizations
  getFood: function() {
    return axios.get("/api/food");
  },
  // Gets all shelter organizations
  getShelter: function() {
    return axios.get("/api/shelter");
  },
  // Gets all healthcare organizations
  getHealth: function() {
    return axios.get("/api/health");
  },
  // Gets all daily care organizations
  getDaily: function() {
    return axios.get("/api/daily");
  },
  // Posts a new org
  createOrg: function(postData) {
    return axios.post("api/organizations", postData);
  }
};

export default API;