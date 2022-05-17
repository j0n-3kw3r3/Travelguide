import {UserAuth} from "../../../firebase-config/Auth"
import { doc, getDoc} from "firebase/firestore";
import { db } from "../../../firebase-config/firebase-config";
import { useEffect, useState } from "react";
import { UserContext } from "../../ProfileContext";

const UserProfile = () => {
 
  const {userProfile, setUserProfile, subPage, setSubPage, data, setData, file, setFile, err, setErr,  success, setSuccess, url, setUrl, passed, setPassed, user} =  UserContext()
                

  return (
    <>
      <div className=" mb-4 top-0 content-evenly   w-full p-4">
      <p  className="mb-2 py-1 border-b"><span className="font-bold uppercase ">Full name: </span>{data.fullName}</p>
      <p  className="mb-2 py-1 border-b"><span className="font-bold uppercase ">Date of birth: </span> {data.dob}</p>
      <p  className="mb-2 py-1 border-b"><span className="font-bold uppercase ">email: </span>{data.email}</p>
      <p  className="mb-2 py-1 border-b"><span className="font-bold uppercase ">phone: </span> {data.phone}</p>
      <p  className="mb-2 py-1 border-b"><span className="font-bold uppercase ">Facebook: </span> {data.fb}</p>
      <p  className="mb-2 py-1 border-b"><span className="font-bold uppercase ">Twitter: </span> {data.twitter}</p>
      <p  className="mb-2 py-1 border-b"><span className="font-bold uppercase ">city of birth: </span> {data.cityofbirth}</p>
      <p  className="mb-2 py-1 border-b"><span className="font-bold uppercase ">Country of birth</span> {data.countryofbirth} </p>
     

      </div>
      
    </>
    
  )
}

export default UserProfile
