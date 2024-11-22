import { GET_USERPROFILE, EDIT_USERNAME } from "./actionTypes";

// Action pour obtenir le profil de l'utilisateur
export const getUserProfile = (profile) => {
    return {
        type: GET_USERPROFILE,
        payload: profile, 
    };
};

// Action pour éditer le nom d'utilisateur
export const editUsername = (username) => {
    return {
        type: EDIT_USERNAME,
        payload: username, 
    };
};
