const axios = require("axios");
const URL_PREFIX = "https://prepercolator-backend.herokuapp.com/api";
// const URL_PREFIX = "http://localhost:3001/api";

const API = {
  getIngredients: function () {
    return axios.get(`${URL_PREFIX}/ingredients/`);
  },
  getIngredientByTier: function (tier) {
    return axios.get(`${URL_PREFIX}/ingredients/tier/${tier}`);
  },
  getDrinkTemplates: function () {
    return axios.get(`${URL_PREFIX}/drinks/`);
  },
  getUserDrinks: function (token) {
    return axios.get(`${URL_PREFIX}/drinks/user`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getTypes: function () {
    return axios.get(`${URL_PREFIX}/type/`);
  },
  addNewIngredient: function (newIngredient, token) {
    return axios.post(`${URL_PREFIX}/ingredients/`, newIngredient, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  addNewDrinkTemplate: function (newDrinkTemplate) {
    return axios.post(`${URL_PREFIX}/drinks/`, newDrinkTemplate);
  },
  deleteIngredientById: function (id, token) {
    return axios.delete(`${URL_PREFIX}/ingredients/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getUserByToken: function (token) {
    return axios.get(`${URL_PREFIX}/users/user`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  deleteUserByToken: function (token) {
    return axios.delete(`${URL_PREFIX}/users/delete`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getOrderbyUserToken: function (token) {
    return axios.get(`${URL_PREFIX}/orders/${token}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  addOrder: function (thingToAdd) {
    return axios.post(`${URL_PREFIX}/orders`, thingToAdd);
  },
  login: function (user) {
    return axios.post(`${URL_PREFIX}/users/login`, user);
  },
  signUp: function (newUser) {
    return axios.post(`${URL_PREFIX}/users/`, newUser);
  },
};

export default API;
