import axios from 'axios';

// export const addSpesies = (data) => {
//     return {
//         type: "POST_SPESIES",
//         payload: axios({
//             method: "POST",
//             //url: "https://breednder.herokuapp.com/api/v1/login",
//             url: "http://localhost:3200/api/v1/login",
//             data: data
//         })
//     }
// }

export const getSpesies = (data) => {
    return {
        type: "GET_SPESIES",
        payload: axios({
            method: "GET",
            //url: "https://breednder.herokuapp.com/api/v1/login",
            url: "http://localhost:3200/api/v1/spesies-all",
            data: data
        })
    }
}