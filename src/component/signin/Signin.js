import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import cover from "../img/cover.jpg"
import { brandName } from "../brand/BrandContext"
import { useContext, useState } from "react"
import { UserAuth } from "../../firebase-config/Auth"


const Signup = () => {
  const value = useContext(brandName)
  const {signIn} = UserAuth()
  const navigate  = useNavigate()

  const  [email, setEmail] = useState("")
  const  [password, setPassword] = useState("")
  const  [error, setError] = useState("")

  const signin = async  (e ) =>{
    e.preventDefault()
    setError('')
    try {
       await signIn( email, password)
       navigate('/')
    } catch (e) {
      const errorCode = e.code;
        const errorMessage = e.message;
        console.log(errorMessage)
        setError(errorMessage)
        
    }
  };
  


  return (
    <div  className= 'fixed top-0 left-0 right-0 bottom-0 z-0 w-screen   bg-secondary '>
    

    <img src={cover} alt="/" className=" w-screen mix-blend-burn opacity-75   object-cover"/>
      
             <div className=" lg:w-[40%] md:w-[60%]  w-[80%]   my-auto mx-auto content-center z-10 fixed top-0 right-0 left-0 ">
    <div className="w-full  rounded-lg mx-auto mt-10 shadow-2xl bg-gradient-to-bl from-green-700  to-primary text-textcolor  opacity-95 " >

           <div className=" w-[80%]  mx-auto  py-8" >
           <h1 className='text-center mt-4 shadow-md py-2 mb-8 ring ring-secondary text-secondary font-semibold rounded tracking-widest  '>{value}</h1>

           <h2 className='text-md'>Hello</h2>
           <h1 className='text-lg my-2 font-bold tracking-widest uppercase'>Sign in!</h1>
               <form action="" className="mt-10   text-secondary"  onSubmit={signin}>
                   
                   
                   <input className='shadow my-2 pl-3 py-2 rounded-lg w-full' type="email" placeholder='Email' onChange={(event) =>{setEmail(event.target.value)}}/>
                   <input className='shadow my-2 pl-3 py-2 rounded-lg w-full' type="password" name="" id=""  placeholder='Password' onChange={(event) =>{setPassword(event.target.value)}}/>
                   <button className='w-full mx-auto p-2 my-2 bg-secondary text-textcolor rounded-full uppercase tracking-wider  shadow-lg ' type="submit">Login</button>
                   {error&&
               <p className='w-full mx-auto p-2 text-center bg-red-200 rounded shadow-lg '>{error}</p>
                   }
               </form  > 
               <p className="w-full mx-auto pt-4 text-center">or</p>
               <div className="w-full flex justify-between my-4">
               <span className=""><FaFacebookF size={20}/></span>
               <span className=""><FaGoogle size={20}/></span>
               <span className=""><FaTwitter size={20}/></span>
               </div>
                 
               <p className='w-full mx-auto pt-4 text-center '>Don't have an account? <span className='text-secondary'><Link to="/registration">Sign Up</Link></span></p>
           </div>
       </div>
 
    </div>
</div>
  )
}

export default Signup
