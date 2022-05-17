import { db, storage} from "../../../firebase-config/firebase-config"; 
import { useEffect, useState } from "react"
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { UserContext } from "../../ProfileContext";


const ProfileEdit = () => {

  const [file, setFile] = useState("")
  const [success, setSuccess] = useState("")
  const [err, setErr] = useState("")
  const [progressBar, setProgressBar] = useState("")

  const {userProfile, setUserProfile, subPage, setSubPage, data, setData,  url, setUrl, passed, setPassed, user, setfunction} =  UserContext()
  

  useEffect(()=>{
      const profilePic = () =>{
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
    console.log('Upload is ' + progress + '% done');
    setProgressBar(progress)
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
      
      setUserProfile((prev)=>({...prev, img:downloadURL}))
    });
  }
);

      }
      file && profilePic()
  },[file])
 
   const updateHandle = async (e) =>{
    e.preventDefault()
    setfunction()
    const updateProfile = doc(db, 'users/' + user.uid);
 try{  
     await updateDoc(updateProfile, userProfile)
     setSuccess("Update successful!")
     setFile(null)
    
    
} catch(err){
  console.log(err)
  setErr(err)
}
}

useEffect(()=>{
        setSuccess('')
},[])
  

  return (
    <form className=" w-full p-4 mb-8 " onSubmit={updateHandle}>
       <div className="flex items-center justify-center w-full mb-2">
                            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                <div className="h-full w-full text-center flex flex-col items-center justify-center   ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                    </div>
                                    <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> your profile picture  here <br /> or <span  id="" className="text-blue-600 hover:underline">select a pictue</span> from your computer</p>
                                </div>
                                <input type="file" className="hidden" id="file" onChange={(e)=> setFile(e.target.files[0])}/>
                            </label>
                        </div>
                        <p className="text-sm text-gray-300 mb-4">
                                <span>File type: png, jpeg, jpg.</span>
                            </p>
                            {
              file &&
            <div className=" h-1 bg-primary  mb-4 " style={{ width: progressBar +"%"}}></div>
            }
                        
      <input type="text" name="" placeholder="full-name" className=" px-4 py-2 rounded shadow-sm mb-4 w-[70%] border border-gray-300 " id="" onChange={(e) =>setUserProfile({...userProfile, fullName:(e.target.value)})} />
      <input type="date" name="" placeholder="Date-of-birth" className=" px-4 py-2 rounded shadow-sm mb-4 w-[70%] border border-gray-300" id="" onChange={(e) =>setUserProfile({...userProfile, dob:(e.target.value)})} />
     
      <input type="number" name="" placeholder="Phone" className=" px-4 py-2 rounded shadow-sm mb-4 w-[70%] border border-gray-300" id="" onChange={(e) =>setUserProfile({...userProfile, phone:(e.target.value)})} />
      <input type="text" name="" placeholder="facebook" className=" px-4 py-2 rounded shadow-sm mb-4 w-[70%] border border-gray-300" id=""  onChange={(e) =>setUserProfile({...userProfile, fb:(e.target.value)})} />
      <input type="text" name="" placeholder="Twitter" className=" px-4 py-2 rounded shadow-sm mb-4 w-[70%] border border-gray-300" id="" onChange={(e) =>setUserProfile({...userProfile, twitter:(e.target.value)})}  />
      <input type="text" name="" placeholder="city of birth" className=" px-4 py-2 rounded shadow-sm mb-4 w-[70%] border border-gray-300" id="" onChange={(e) =>setUserProfile({...userProfile, cityofbirth:(e.target.value)})} />
      <input type="text" name="" placeholder="country of birth" className=" px-4 py-2 rounded shadow-sm mb-4 w-[70%] border border-gray-300" id="" onChange={(e) =>setUserProfile({...userProfile, countryofbirth:(e.target.value)})} />
      <button className="block  px-8 py-2 shadow-lg  bg-primary font-bold tracking-widest  rounded border border-gray-300 hover:-translate-y-1    ease-in-out delay-100 hover:shadow-2xl"  type="submit" >Update</button>
          { err &&
          
                <p className='w-full mx-auto mb-4 text-center p-2 shadow-lg mt-2 bg-red-200 rounded '>{err}</p>
                || 
            success && 
            <>
               <p className='w-full mx-auto mb-4 text-center p-2 mt-2 shadow-lg bg-green-200 rounded '>{success}</p>
            </>

          }
    </form>
  )
}

export default ProfileEdit
