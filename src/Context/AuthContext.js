import React, {useEffect, useState} from 'react';
import {createContext} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";


export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const [auth, toggleAuth] = useState({isAuth: false, user: null, status: 'pending'});
    const history = useHistory();

    useEffect(() => {
        const getToken = localStorage.getItem('token');
        if (getToken) {
            getUserData(getToken);
        } else {
            toggleAuth({
                ...auth, isAuth: false,
                user: null,
                status: 'done',
            });

        }

    }, []);

    async function getUserData(token) {
        try {
            const result = await axios.get(` https://frontend-educational-backend.herokuapp.com/api/user`,
                {headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}});

            toggleAuth({
                ...auth, isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                    time: result.data.time,
                    intensity: result.data.intensity,
                    focus: result.data.time
                }, status: 'done'
            });

            history.push('/profile');
        } catch (error) {
            console.error();
            toggleAuth({
                ...auth, isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }


    function signIn(jwt) {

        getUserData(jwt.accessToken);
        localStorage.setItem('token', jwt.accessToken);

    }

    function signOut() {
        toggleAuth({...auth, isAuth: false, user: null});
        history.push('/signin');
        localStorage.removeItem('token');
    }


    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        logout: signOut,
        login: signIn,
    };


    return (
        <AuthContext.Provider value={data}>
            {auth.status === 'done' ?
                children : <p>Loading...</p>}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;