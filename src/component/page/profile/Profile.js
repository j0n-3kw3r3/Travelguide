import profileHero from"../../img/profileHero.jpg"
import {Link} from"react-router-dom"
import {  FaFacebookMessenger,  FaNewspaper } from "react-icons/fa";
import defaultImg from"../../img/default.jpg"
import UserProfile from "./UserProfile";
import ProfileEdit from "./ProfileEdit";
import TripHistory from "./TripHistory";
import { useEffect, useState } from "react";
import Footer from "../../Footer"
import { arrayUnion, doc, getDoc, updateDoc} from "firebase/firestore";
import { db, storage } from "../../../firebase-config/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL, list } from "firebase/storage";
import { UserContext } from "../../ProfileContext"



  const Profile = () => {
    
    const {userProfile, setUserProfile, subPage, setSubPage, data, setData, file, setFile, err, setErr, url, setUrl, passed, setPassed, user} =  UserContext()
    const post = data.postImg;
    const [success, setSuccess] = useState("")
    const [progressBar, setProgressBar] = useState("")

             
         
                

    // function for uploading img file
  useEffect(()=>{
    const uploadfile = () =>{
      const name = new Date().getTime()+ file.name
    
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
(snapshot) => {
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  setProgressBar(progress)
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case 'paused':
      console.log('Upload is paused');
      break;
    case 'running':
      console.log('Upload is running');
      break;
      default:
        break;
  }
}, 
(error) => {
  // Handle unsuccessful uploads
  console.log(error)
}, 
async () => {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
 
   setUrl(downloadURL)
   setPassed(!passed)
  });
}
);

    }
    file && uploadfile()

   
},[file])

useEffect(()=>{
 const updateHandle = async () =>{
      const updateProfile = doc(db, 'users/' + user.uid);
    try{  
      if (url) {
        
        await updateDoc(updateProfile, 
         {
           postImg: arrayUnion(url)
          })
       
          setSuccess("Update successful!")
         setUrl(null)
         setFile(null)
      }
    } catch(err){
    console.log(err)
    setErr(err)
    }
  }
  setSuccess(null)
    updateHandle()
},[passed])


  return (
    <div className=" w-[80%]  mx-auto relative " >
      <div className="h-[120px] md:h-[250px] bg-secondary absolute w-full ">

      </div>
      <img src={profileHero} alt="ProfileHero" className="h-[120px] md:h-[250px] object-cover w-full opacity-70  bg-blend-overlay" />
      <div className="relative ">

      <div className=" rounded-full  md:scale-150 shadow-md w-[80px] h-[80px] md:ml-[200px] ml-14    overflow-clip   relative top-[-40px]" >
        <img src={data.img ? data.img : defaultImg}  className="object-cover md:scale-150 w-[80px] h-[80px]    " alt="profileImage"/>
      </div>
      <div className=" top-0 shadow-lg  w-full p-4  pt-8 rounded rounded-b grid grid-cols-3 "  >
        <div className="col-span-2 mt-12 mx-auto w-[90%] justify-center text-center">
          <h1 className="font-bold mb-2">
        {data.fullName}
      </h1>
      <p className="mb-2">{data.email}</p>
    
      <div className="md:flex justify-evenly">
        <div className="my-2">
      <label  className="font-bold ">Likes</label><p>3491</p>
        </div>
        <div className="my-2">
      <label  className="font-bold ">Following</label><p>1023</p>
        </div>
        <div className="my-2">
      <label  className="font-bold ">Followers</label><p>7314</p>
        </div>
        </div>
       <div className="md:flex justify-evenly">
      <div className="mb-2">
      <label className="font-bold flex  justify-center gap-2" ><span><FaFacebookMessenger/></span>Messages</label><p>24</p>
      </div>
      <div className="mb-2">

      <label className="font-bold gap-2 justify-center flex" ><span><FaNewspaper/></span>News</label><p>14</p>
      </div>
        </div >
        
        <div className="flex items-center justify-center w-full mb-2 my-4">
                            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-40 p-10 group text-center">
                                <div className="h-full w-full text-center flex flex-col items-center justify-center   ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                    </div>
                                    <p className="pointer-none text-gray-500 "><span className="text-xs">Drag and drop</span> files here <br /> or <span id="" className="text-blue-600 hover:underline">select a file</span> from your computer</p>
                                </div>
                                <input type="file" className="hidden" id="file" onChange={(e)=> setFile(e.target.files[0])}/>
                            </label>
                        </div>
        <p className="text-sm text-gray-300 mb-4">
                <span>File type: png, jpeg, jpg.</span>
            </p>
            {
              file &&
            <div className=" h-1 bg-primary  " style={{ width: progressBar +"%"}}></div>
            }
            
                <div className="  grid grid-cols-1 md:grid-cols-2  mx-auto gap-2 mt-4">
          {
            
            post &&
            post.map((item, index) =>{
              const nextItem = item+1
              const nextIndex = index+1
           return  <div key={nextIndex} className="  w-full h-80 overflow-hidden rounded  border shadow" >
                    <img src={nextItem}  className="object-cover md:scale-150  " alt="Status"/>
                  </div>
            })
          }
          
     

        </div>    
</div>
      
      
      <div className=" col-span-1 h-full bg-textcolor shadow-lg relative">
       
      <Link to="/" className="self-r border shadow p-1 m-1 absolute right-0 ">Home</Link>
        
  <div className=" shadow relative shadow-b mt-6 p-4 mb-8  ">
    <h1 className="uppercase font-bold">{subPage}</h1>

    <ul className="flex absolute top-4 gap-2 right-4">
      <li className={ subPage === "profile" ? "border-b-secondary border-b cursor-pointer" :" cursor-pointer"}onClick={()=>{setSubPage("profile"); }} >Profile</li>
      <li className={ subPage === "edit"?"border-b-secondary border-b cursor-pointer":" cursor-pointer" }onClick={()=>{setSubPage("edit")}}>Edit</li>
      <li className={ subPage === "history" ?"border-b-secondary border-b cursor-pointer":" cursor-pointer" }onClick={()=>{setSubPage("history")}}>Trips History</li>
    </ul>
    </div> 
{
  (subPage === "profile" &&
  <UserProfile />) ||
  ( subPage === "edit" &&
  <ProfileEdit />) ||
   (subPage === "history" &&
  <TripHistory/> )
}
      </div >
      </div>
      

      
      </div>
      <Footer className="float bottom-0" />
    </div>
  )
}

export default Profile
