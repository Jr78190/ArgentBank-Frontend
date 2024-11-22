import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUsername } from '../redux/actions/actionUser';
import '../css/main.css';

function UserProfile() {
    const token = useSelector((state) => state.auth.token);
    const userData = useSelector((state) => state.user.profile);
    const [newUsername, setNewUsername] = useState(userData?.username || '');
    const [firstName, setFirstName] = useState(userData?.firstName || '');
    const [lastName, setLastName] = useState(userData?.lastName || '');
    const [errorMessage, setErrorMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false); 
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    const { firstName, lastName, userName } = data.body;
                    
                    setFirstName(firstName);
                    setLastName(lastName);
                    setNewUsername(userName);
                    
                    dispatch(editUsername(userName));
                } else {
                    console.error("Échec de la récupération du profil");
                }
            } catch (error) {
                console.error("Erreur :", error);
            }
        };
        
        fetchUserProfile();
    }, [token, dispatch]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ userName: newUsername }),
            });
            if (response.ok) {
                const data = await response.json();
                dispatch(editUsername(data.body.userName));
                setIsEditing(false); 
            } else {
                setErrorMessage("Impossible de mettre à jour le nom d'utilisateur");
            }
        } catch (error) {
            setErrorMessage("Erreur de connexion au serveur");
            console.error("Erreur :", error);
        }
    };

    const handleEdit = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        setIsEditing(true); // Passe en mode édition
    };
    

    const handleCancel = () => {
        setIsEditing(false); // Sortir du mode édition
        setNewUsername(userData?.username ); 
    };

    return (
        <div className="user-profile">
            <form onSubmit={handleSubmit} className="profile-form">
                <label>
                    User Name :
                    <input 
                        type="text"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        disabled={!isEditing} 
                    />
                </label>
                <div>
                    <label>
                        First Name :
                        <input className="read-input"
                            type="text"
                            value={firstName}
                            disabled
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name :
                        <input className="read-input"
                            type="text"
                            value={lastName}
                            disabled
                        />
                    </label>
                </div>
                <div className="button-container">
                    {isEditing ? (
                        <>
                            <button className="edit-button" type="submit">Save</button>
                            <button className="edit-button" type="button" onClick={handleCancel}>Cancel</button>
                        </>
                    ) : (
                        <div className="button-container2"> 
                            <button className="edit-button" type="button" onClick={handleEdit}>Edit</button>
                        </div>
                    )}
                </div>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default UserProfile;
