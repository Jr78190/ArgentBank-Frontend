import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/actionTypes";

const initialState = {
    status: "VOID", // Comme dans userReducer
    token: null, 
    isConnected: false, 
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: "SUCCEEDED",
                isConnected: true,
                token: action.payload,
            };

            case LOGIN_FAILURE: {
                return {
                    ...state,
                    status: "FAILED",
                    isConnected: false,
            
                }
            }   
            
        case LOGOUT: {
            return initialState;
        }
        default:
            return state; 
    }
};

export default authReducer;
