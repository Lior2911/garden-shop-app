import { createContext, useContext, useEffect,useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
  
} from "firebase/auth";
import { auth } from "../fireBase";


const userAuthContext = createContext();

export function UserAuthProvider({ children }) {
  const [user, setUser] = useState("");
  console.log(user);

  function signUpUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function LogInUser(email, password) {
    console.log("Email",email)
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut(){
    return signOut(auth)
  }
  function googleSignIn(){
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider)
  }
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user ,signUpUser,LogInUser,logOut,googleSignIn}}>
      {children}
    </userAuthContext.Provider>
  );
}
export function useUserAuth() {
  return useContext(userAuthContext);
}
