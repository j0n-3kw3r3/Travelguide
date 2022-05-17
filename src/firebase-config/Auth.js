import {
   getAuth, onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signOut, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "./firebase-config";
import {createContext, useContext, useEffect, useState} from "react"

 const AuthContext = createContext()

export const AuthProvider = ({children}) => {

          const [user, setUser] = useState({}) 

          const createUser = async (registerName, email, password) =>{
            const auth = getAuth();
            
             await createUserWithEmailAndPassword(auth, email, password).then(cred=>{
              setDoc(doc(db, 'users/' + cred.user.uid), {
                username: registerName,
                email: email,
                fullName: "",
                dob:"",
                phone:"",
                fb:"",
                twitter:"",
                cityofbirth:"",
                countryofbirth:""      
              });
            })
          }

          const signIn = (email, password)=>{
            const auth = getAuth();
            return signInWithEmailAndPassword(auth, email, password)
          }

         

          const logout  = ()=>{
            const auth = getAuth();
            return signOut(auth)
          }

          useEffect(() =>{
            const auth = getAuth();
              const unSubscribe  = onAuthStateChanged(auth, (currentUser) =>{
                setUser(currentUser)
              } )
              return ()=>{
                unSubscribe();
              }
          }, [])
    
  return (
    <AuthContext.Provider value= {{createUser, user, setUser, logout, signIn}} >
      {children}
    </AuthContext.Provider>
  )
}

export  const UserAuth  = ()  =>{
  return useContext(AuthContext)
}
