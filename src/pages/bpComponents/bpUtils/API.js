const axios = require('axios');
const URL_PREFIX = "http://localhost:3001/api"
// const URL_PREFIX = "DEPLOY"

const API = {
    getIngredients: function(){
        return axios.get(`${URL_PREFIX}/ingredients/`);
    },
    getDrinkTemplates: function(){
        return axios.get(`${URL_PREFIX}/drinks/`);
    }
}

export default API;