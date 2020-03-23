const initialState = {
    data: [],
    isLoading: false,
    error: false,
    dataError:''
}


const login = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_LOGIN_PENDING':
            return {
                ...state,
                isLoading: true
            }

            case 'POST_LOGIN_FULFILLED':
                window.localStorage.setItem('token', action.payload.data.token)
                return {
                    ...state,
                    isLoading: false,
                    data: action.payload.data
                }

                case 'POST_LOGIN_REJECTED':
                    return {
                        ...state,
                        isLoading: true,
                            error: true,
                            dataError: {
                                message: 'Invalid password or Email'  
                            }
                    }

                    default:
                        return state
    }
}

export default login;