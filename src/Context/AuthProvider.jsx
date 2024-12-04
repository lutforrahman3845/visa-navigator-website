import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[loading , setLoading] = useState(true);
    const [email, setEmail] = useState("")
 console.log(user)
    const createNewUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email ,password)
    }
    const createNewUserWithGoogle = (googleProvider)=>{
        setLoading(true)
        return signInWithPopup (auth, googleProvider)
    }
    const logIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }
    const logInWithGoogle = (googleProvider)=>{
        setLoading(true)
        return signInWithPopup (auth, googleProvider)
    }
    const profileUpDate = (upDatedProfile) =>{
        return updateProfile(auth.currentUser, upDatedProfile)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    const authInfo = {
        user,
        setUser,
        createNewUser,
        createNewUserWithGoogle,
        logIn,
        logInWithGoogle,
        logOut,
        loading,
        profileUpDate,
        email,
        setEmail,
        resetPassword
    }

   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;