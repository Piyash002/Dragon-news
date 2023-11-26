import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,

  onAuthStateChanged,


  signInWithEmailAndPassword,


  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const authContext = createContext(null);

const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  //crate user
   const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //Signin
  const signIn = (email,password) =>{
    setLoading(true )
    return signInWithEmailAndPassword(auth,email,password);
  }

  //logouut
 const logOut = () =>{
  setLoading(true)
    return signOut(auth)
 }

  useEffect(()=>{
   const unSubscribe=  onAuthStateChanged(auth, currentUser =>{
     console.log('user is auth state cahanged',currentUser);
     setUser(currentUser)
     setLoading(false)
   });
   return ()=>{
    unSubscribe();
   }
  
  },[])

  

  const authInfo = {
    user,
    loading, 
    createUser,
    signIn,
    logOut,
  
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthContext;
