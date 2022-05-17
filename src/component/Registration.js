import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { brandName } from './brand/BrandContext'
import cover from "./img/cover.jpg"
import { UserAuth } from '../firebase-config/Auth';




const Registration = () => {
  const value = useContext(brandName)
  const  [registerName, setRegisterName] = useState("")
  const  [email, setEmail] = useState("")
  const  [password, setPassword] = useState("")
  const  [error, setError] = useState("")
  const navigate  = useNavigate()
  const {createUser} =  UserAuth()

  const register = async  (e ) =>{
    e.preventDefault()
    setError('')
    try {
       await createUser(registerName, email, password)
       navigate('/')
    } catch (e) {
      const errorCode = e.code;
        const errorMessage = e.message;
        setError(errorMessage)
        
    }
  };
  return (
    <div  className= 'fixed top-0 left-0 right-0 bottom-0 z-0 w-screen   bg-secondary '>
    

<img src={cover} alt="/" className=" w-screen mix-blend-burn opacity-75   object-cover"/>
  
         <div className=" lg:w-[40%] md:w-[60%]  w-[80%] my-auto mx-auto content-center z-10 fixed top-0 right-0 left-0 ">
            <div className="w-full  rounded-lg mx-auto mt-20 shadow-2xl  bg-gradient-to-bl from-green-700  to-primary text-textcolor opacity-95 " >

                <div className=" w-[80%]  mx-auto  py-8" >
             <h1 className='text-center mt-4 shadow-md py-2 mb-8 ring ring-secondary text-secondary font-semibold rounded tracking-widest '>{value}</h1>
                <h2 className='text-md'>Welcome</h2>
                <h1 className='text-lg uppercase my-2 font-bold tracking-widest '>Sign Up!</h1>
                    <form action="" className="mt-10  text-secondary" onSubmit={register} >
                        
                        <input className='shadow-lg  text-secondary my-2 pl-3 py-2 rounded-lg w-full' type="text" placeholder='Name' onChange={(event) =>{setRegisterName(event.target.value)}}/>
                        <input className='shadow-lg text-secondary my-2 pl-3 py-2 rounded-lg w-full' type="email" placeholder='Email'onChange={(event) =>{setEmail(event.target.value)}}/>
                        <input className='shadow-lg text-secondary my-2 pl-3 py-2 rounded-lg w-full' type="password" name="" id=""  placeholder='Password' onChange={(event) =>{setPassword(event.target.value)}}/>
                        <button className='w-full mx-auto p-2 my-2 bg-secondary text-textcolor rounded-full shadow-lg tracking-wide uppercase ' type='submit'>Register</button>
                        
                        {error &&
                         <p className='w-full mx-auto mb-4 text-center p-2 shadow-lg bg-red-200 rounded '>{error}</p>
                        }
                   
                    </form>
                    <p className='w-full mx-auto mb-4 text-center pt-4 '>Alread have an account? <span className='text-secondary'><Link to="/signup">Sign In</Link></span></p>
                </div>
            </div>
      
         </div>
    </div>
  )
}

export default Registration
