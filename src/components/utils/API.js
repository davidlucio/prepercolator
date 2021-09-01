const axios = require("axios");
const URL_PREFIX = "http://localhost:3001/api";
// const URL_PREFIX = "DEPLOY"
// TODO:
const API = {
  getIngredients: function () {
    return axios.get(`${URL_PREFIX}/ingredients/`);
  },
  //   getIngredientByTier: function () {
  //     return axios.get(`${URL_PREFIX}TODO`);
  //   },
  getDrinkTemplates: function () {
    return axios.get(`${URL_PREFIX}/drinks/`);
  },
  getTypes: function () {
    return axios.get(`${URL_PREFIX}/type/`);
  },
  addNewIngredient: function (newIngredient) {
    return axios.post(`${URL_PREFIX}/ingredients/`, newIngredient);
  },
  addNewDrinkTemplate: function (newDrinkTemplate) {
    return axios.post(`${URL_PREFIX}/drinks/`, newDrinkTemplate);
  },
  deleteIngredientById: function (id) {
    return axios.delete(`${URL_PREFIX}/ingredients/${id}`);
  },
  getUserSavedDrinks: function (id) {
    return axios.get(`${URL_PREFIX}/users/${id}/savedDrinks`);
  },
  getUserById: function (id) {
    return axios.get(`${URL_PREFIX}/users/${id}`);
  },
  // NEED TO IMPLEMENT THESE TWO (API.LOGIN.then((res)=>{console.log(res.data)SOMETHINGELSE}))
  login: function (user) {
    return axios.post(`${URL_PREFIX}/users/login`, user);
  },
  signUp: function (newUser) {
    return axios.post(`${URL_PREFIX}/users/`, newUser);
  },
};

export default API;
