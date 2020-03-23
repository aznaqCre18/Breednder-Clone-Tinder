import axios from 'axios';

// import {token} from '../config/index'
const token = window.localStorage.getItem('token')

export const getUser = () => {
    return {
        type : "GET_ALL_PET",
        payload: axios({    
            method: "GET",
            url: "http://localhost:3200/api/v1/pets",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}