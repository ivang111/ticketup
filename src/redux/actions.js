import axios from "axios";
import { async } from "validate.js";
import { REACT_APP_BASE_URL, API } from "../frameworks/config/Constants";

export  function  getCountries() {
    return async function (dispatch){
        await axios.get(`${LOCAL_HOST}/api/countries/`)
        .then((r) => {
            return dispatch({ 
                type: GET_ALL_COUNTRIES, 
                payload: r.data 
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };
}