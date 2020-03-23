const initialState = {
    data : [],
    loading: false,
    error: false,
    isLogin: false
}

const register = (state = initialState, action) => {
    switch(action.type) {
        case "POST_REGISTER_PENDING":
        return {
            ...state,
            loading: true
        }

        case "POST_REGISTER_FULFILLED":
        window.localStorage.setItem('token', action.payload.data.token)
        return {
            ...state,
            data: action.payload.data,
            loading: false,
            isLogin: true
        }

        case "POST_REGISTER_REJECTED": 
        return {
            ...state,
            loading: true,
            error: true
        }

        default: 
            return state
    }
}

export default register