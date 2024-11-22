import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes";

export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    }
}

export const loginFailed = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
} 

export const login = ({ email, password }) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }), 
            });

            console.log("Response Status:", response.status); 
            console.log("Response Body:", await response.json()); 

            
            if (response.ok) {
                const data = await response.json();
                const token = data.body.token;
                dispatch(loginSuccess(token)); 
            } else {
                const error = await response.json();
                dispatch(loginFailed(error.message || "Erreur de connexion"));
            }
        } catch (error) {
            dispatch(loginFailed("Erreur réseau. Veuillez réessayer."));
        }
    };
};
