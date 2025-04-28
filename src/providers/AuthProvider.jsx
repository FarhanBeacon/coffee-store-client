import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loader, setLoader ] = useState(true);

    const createUser = (email, password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // SignIn User
    const signInUser = (email, password)=>{
      setLoader(true)
      return signInWithEmailAndPassword(auth, email, password);
    }

    // OnAuthChange 
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser){
          setUser(currentUser);
        }else {
          setUser(false);
        }
        return ()=> unSubscribe();
      })
    },[])

    // SignOut User
    const signOutUser = ()=>{
      setLoader(true);
      return signOut(auth);
    }

  const userInfo = {
    user,
    setUser,
    loader,
    createUser,
    signInUser,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
