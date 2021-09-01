const axios = require("axios");
const URL_PREFIX = "http://localhost:3001/api";
// const URL_PREFIX = "DEPLOY"
// TODO:
const API = {
  getIngredients: function () {
    return axios.get(`${URL_PREFIX}/ingredients/`);
  },
  getIngredientByTier: function (tier) {
    return axios.get(`${URL_PREFIX}/ingredients/${tier}`);
  },
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
  getUserByToken: function (token) {
    return axios.get(`${URL_PREFIX}/users/${token}`);
  },
  deleteUserByToken: function (token) {
    return axios.delete(`${URL_PREFIX}/users/${token}`);
  },
  getOrderbyUserToken: function (token) {
    return axios.get(`${URL_PREFIX}/orders/${token}`);
  },
  login: function (user) {
    return axios.post(`${URL_PREFIX}/users/login`, user);
  },
  signUp: function (newUser) {
    return axios.post(`${URL_PREFIX}/users/`, newUser);
  },
};

export default API;
