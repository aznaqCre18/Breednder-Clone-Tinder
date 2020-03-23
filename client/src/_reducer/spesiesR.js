const initialState = {
    data: [],
    loading: false,
    error: false
}

const getSpesies = (state = initialState, action) => {
    switch(action.type) {
        case "GET_SPEIES_PENDING" : 
        return {
            ...state,
            loading: true
        }

        case "GET_SPESIES_FULFILLED": 
        return {
            ...state,
            data: action.payload.data,
            loading: false 
        }

        case "GET_SPESIES_REJECTED": 
        return{
            ...state,
            loading: true,
            error: true
        }

        default:
            return state;
    }
}

export default getSpesies;
