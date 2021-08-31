const axios = require('axios');
const URL_PREFIX = "http://localhost:3001/api"
// const URL_PREFIX = "DEPLOY"

const API = {
    getIngredients: function(){
        return axios.get(`${URL_PREFIX}/ingredients/`);
    },
    getDrinkTemplates: function(){
        return axios.get(`${URL_PREFIX}/drinks/`);
    },
    getTypes: function(){
        return axios.get(`${URL_PREFIX}/types/`);
    },
    addNewIngredient: function(newIngredient){
        return axios.post(`${URL_PREFIX}/ingredients/`, newIngredient);
    },
    addNewDrinkTemplate: function(newDrinkTemplate){
        return axios.post(`${URL_PREFIX}/drinks/`);
    },
    deleteIngredientById: function(id){
        return axios.delete(`${URL_PREFIX}/ingredients/${id}`);
    }
}

export default API;