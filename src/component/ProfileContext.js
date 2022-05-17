import { doc, getDoc } from 'firebase/firestore'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { UserAuth } from '../firebase-config/Auth'
import { db } from '../firebase-config/firebase-config'

export const UseProfile = createContext()


export const ProfileContext = ({children}) => {
    const [userProfile, setUserProfile] = useState({})
    const [subPage, setSubPage] =  useState("profile")
    const [data, setData] =  useState({})
    const [file, setFile] = useState()
    const [err, setErr] =  useState('')
    const [success, setSuccess] =  useState('')
    const [url, setUrl] =  useState('')
    const [passed, setPassed] =  useState(false)
    const {user} =  UserAuth()
    const setfunction  =  () =>  {
        setPassed(!passed)
      }
  
      
    // used to fetch data from the database
    useEffect(()=>{
        const onMount  = async ()  =>{
            const docSnap = await getDoc(doc(db,"users/"+user.uid))
            if (docSnap.data()) {
            const userdata  = docSnap.data()
            setData(userdata)
            
            } else {
            return console.log("No Document" )
            
            }
        }
        onMount()
        
        },[user, passed])
  
  
  
    return (
    <UseProfile.Provider value={{userProfile, setUserProfile, subPage, setSubPage, data, setData, file, setFile, err, setErr,  success, setSuccess, url, setUrl, passed, setPassed, user, setfunction}} >
      {children}
    </UseProfile.Provider>
  )
}

export const UserContext =()=>{
    return useContext(UseProfile)
}
