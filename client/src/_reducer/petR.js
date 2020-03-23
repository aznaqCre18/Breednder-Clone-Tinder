const initialState = {
    data : [],
    isLoading: false,
    error: false
}


const getUser = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ALL_PET_PENDING' : 
            return {
                ...state,
                isLoading: true
            }

        case 'GET_ALL_PET_FULFILLED' : 
            return {
                ...state,
                isLoading : false,
                data : action.payload.data,
            }

        case 'GET_ALL_PET_REJECTED' : 
            return{
                ...state,
                isLoading: true,
                error: true
            }
        default : 
            return state
    }

}

export default getUser