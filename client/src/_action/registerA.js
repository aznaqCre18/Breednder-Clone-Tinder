import axios from 'axios';

export const register = (data) => {
    return {
        type: "POST_REGISTER",
        payload: axios({
            method: "POST",
            //url: "https://breednder.herokuapp.com/api/v1/login",
            url: "http://localhost:3200/api/v1/register",
            data: data
        })
    }
}