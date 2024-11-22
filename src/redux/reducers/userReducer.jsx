import { GET_USERPROFILE, EDIT_USERNAME, LOGOUT } from "../actions/actionTypes";

const initialState = {
    profile: {
        username: '',
        email: '',
    },
    status: 'VOID', // Etat initial avant toute action
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',
                profile: action.payload 
            };
            case EDIT_USERNAME:
                return {
                    ...state,
                    status: 'MODIFIED',
                    profile: {
                        ...state.profile, 
                        username: action.payload, 
                    },
            };
        case LOGOUT: {
            return initialState; 
        }
        default:
            return state;
    }
};

export default userReducer;
