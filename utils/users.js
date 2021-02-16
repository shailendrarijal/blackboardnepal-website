import React, { useState, useEffect, useContext, createContext } from 'react';
import 'firebase/auth';
import firebase from 'firebase'
import { useAuth } from './auth';

const userContext = createContext();

export function ProvideUser({ children }) {
    const user = useProvideUser();
    return <userContext.Provider value={user}>{children}</userContext.Provider>
}

export const useUser = () => {
    return useContext(userContext);
}

function useProvideUser() {

    const auth = useAuth();

    const userId = auth.userId;

    const [isContributor, setIsContributor] = useState(false);
    
    const [profileInfo, setProfileInfo] = useState({
        username: '',
        country: '',
        firstName: '',
        lastName: '',
        jobTitle: '',
        workPlace: '',
        email: '',
    });

    const [docId, setDocId] = useState('');

    useEffect(() => {
       if (!auth.userId) return;
    }, []);

    const getUserData = () => {
        firebase.firestore().collection('users').where('userId', '==', userId).get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    if (doc.data().role === 'contributor') {
                        setIsContributor(true);
                        setDocId(doc.id);
                    }
                    setProfileInfo({
                        username: doc.data().username,
                        firstName: doc.data().firstName,
                        lastName: doc.data().lastName,
                        country: doc.data().country,
                        jobTitle: doc.data().jobTitle,
                        workPlace: doc.data().workplaceName,
                        email: doc.data().email,
                    })
                });
            }
        );
        return {profileInfo, isContributor};
    }

    const updateUserData = (profileInfo) => {
        firebase.firestore().collection('users').doc(docId).update(
            {"username": profileInfo.username,
            "country": profileInfo.country,
            "firstName": profileInfo.firstName,
            "lastName": profileInfo.lastName,
            "jobTitle": profileInfo.jobTitle,
            "workplaceName": profileInfo.workPlace,}
        )
            .then(alert('Updated'))
            .catch(error => { console.log(error) })
    }
   
    return {
        getUserData,
        updateUserData,
        // addUser,
        isContributor,
    };
}
