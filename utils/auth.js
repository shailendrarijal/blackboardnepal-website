import React, { useState, useEffect, useContext, createContext } from 'react';
import queryString from 'query-string';
import firebase from './auth/firebase';
import 'firebase/auth';
// import {useUser} from './users';

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

const addUser = (props) => {
    firebase.firestore().collection("users").add({
        country: '',
        firstName: '',
        lastName: '',
        email: props.email,
        userId: props.uid,
        username: '',
        workplaceName: '',
        jobTitle: '',
        dateJoined: firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
        role: 'member',
    });
}

// function verifyUser() {
//     firebase.auth().currentUser.sendEmailVerification()
//         .then(response => {return response}
//     ).catch(error => {return error})
// }

export const useAuth = () => {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);

    // const newUser = useUser();

    const signin = (email, password) => {

        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user)
                    return response.user;
                // if (response.user.emailVerified) {
                //     setUser(response.user)
                //     return response.user;
                // } else {
                //     setUser(false);
                //     return "Please verify your email address";
                // }
            });
    }

    // const verifyEmail = (email) => {
    //     return firebase.auth().currentUser.sendEmailVerification(email)
    //         .then(response => { return response }).catch(error => { return error });
    // }

    const signup = (email, password) => {

        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                addUser(response.user);
                // verifyUser();
                return response.user;
            });
    }

    const signout = () => {
        return firebase.auth()
            .signOut()
            .then(() => {
                setUser(false);
            });
    }

    const sendPasswordResetEmail = (email) => {
        return firebase.auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                return true;
            });
    }

    const confirmPasswordReset = (password, code) => {
        const resetCode = code || getFromQueryString('oobCode');

        return firebase.auth()
            .confirmPasswordReset(resetCode, password)
            .then(() => {
                return true;
            });
    }

    const currentUser = () => {
        return firebase.auth().currentUser;
    }

    useEffect(() => {
        const unsubscribe = firebase.auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    setUser(user);
                } else {
                    setUser(false);
                }
            });
        
        return () => unsubscribe();
    }, []);

    return {
        userId: user && user.uid,
        signin,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset,
        // verifyEmail,
        currentUser,
    };
}

const getFromQueryString = (key) => {
    return queryString.parse(window.location.search)[key];
}
