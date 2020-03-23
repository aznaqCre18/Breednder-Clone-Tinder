import axios from 'axios';

export const login = (data) => {
    return {
        type: "POST_LOGIN",
        payload: axios({
            method: "POST",
            //url: "https://breednder.herokuapp.com/api/v1/login",
            url: "http://localhost:3200/api/v1/login",
            data: data
        })
    }
}