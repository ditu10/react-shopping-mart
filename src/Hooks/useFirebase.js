import { createContext, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import initFirebase from "../firebase/firebase.init";

initFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } 
      });

    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log("signed out");
                setUser({});
        })
    }

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        setError
    }



}

export default useFirebase;