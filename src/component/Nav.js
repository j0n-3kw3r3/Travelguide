import React, { useContext, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars} from "react-icons/fa";
import { BsDownload} from "react-icons/bs";
import defaultImg from"./img/default.jpg"
import { Link } from "react-router-dom";
import { brandName } from "./brand/BrandContext";
import { UserAuth } from "../firebase-config/Auth";
import { UserContext } from "./ProfileContext";



const Nav = () => {
  
  const {userProfile, setUserProfile, subPage, setSubPage, data, setData, file, setFile, err, setErr,  success, setSuccess, url, setUrl, passed, setPassed, user} =  UserContext()
    const [menu, setMenu]= useState(false)
    const value = useContext(brandName)

  return (
      <>
    <div className={menu ==true  ?"bg-slate-900 opacity-30 fixed top-0 w-full  ease-in-out duration-1000  h-full":"hidden  ease-in-out duration-1000 "} onClick={()=>setMenu(!menu)}>
    </div>

    <div  className={!menu  ? "bg-secondary  text-textcolor fixed top-0  left-[-140px] z-40 h-screen   p-3 ease-in-out duration-1000  " :  "bg-secondary  text-textcolor  top-0  fixed left-0 h-screen  w-[125px] p-3 ease-in-out duration-1000 " }>
        <div className=" absolute left-20 top-4 cursor-pointer ">
        <AiOutlineClose size={22}  onClick={()=>setMenu(!menu)}/>
        </div>
        <h2 className=" uppercase  text-xs  font-semibold mt-16"  >{value} </h2>

        <div className="relative my-4 ">

        <input type="search" name="" id=""  placeholder="search..." className="w-[105px] border-0  px-4 rounded pl-7 py-1 " />

        
        <HiSearch size={17} className="text-secondary absolute top-[5px] left-[3px]  "  />
        
        </div>
        <ul className="">
           <li className="my-4 mt-8 pl-2 rounded border-[1px] hover:bg-primary  bg-primary cursor-pointer hover:tracking-wider hover:pl-4 p-2 ease-in-out duration-300 text-xs hover:text-secondary "><Link to="/">Home</Link></li>
           <li className="my-4 pl-2 rounded hover:bg-primary cursor-pointer hover:tracking-wider hover:pl-4 p-2 ease-in-out duration-300 text-xs hover:text-secondary"><Link to="about"> About</Link> </li>
           <li className="my-4 pl-2 rounded hover:bg-primary cursor-pointer hover:tracking-wider hover:pl-4 p-2 ease-in-out duration-300 text-xs hover:text-secondary"><Link to="services">Services</Link> </li>
           <li className="my-4 pl-2 rounded hover:bg-primary cursor-pointer hover:tracking-wider hover:pl-4 p-2 ease-in-out duration-300 text-xs hover:text-secondary"><Link to="hotel">Hotels</Link> </li>
           <li className="my-4 pl-2 rounded hover:bg-primary cursor-pointer hover:tracking-wider hover:pl-4 p-2 ease-in-out duration-300 text-xs hover:text-secondary"><Link to="reservations">Reservations</Link> </li>
           <li className="my-4 pl-2 rounded hover:bg-primary cursor-pointer hover:tracking-wider hover:pl-4 p-2 ease-in-out duration-300 text-xs hover:text-secondary"><Link to="destination">Destination</Link> </li>
        </ul>
        <div className="absolute left-0 px-2 py-1 w-full   bottom-8 hover:bg-primary flex ease-in-out duration-500">
              <img src={data.img ? data.img : defaultImg} alt="/" className ="w-8 h-8 cursor-pointer rounded-3xl border border-extra mr-1"  />
              <span className="items-center ">
               
               {user?
               
                <Link to="profile">
                <p className="text-[8px] tracking-wider text-textcolor uppercase cursor-pointer">{data.fullName}</p>

              <p className="text-[7px] -mt-1 cursor-pointer">
                {user.email}</p>
              </Link> 
              :
              <Link to= "login">

              <p className="text-[8px] tracking-wider text-primary cursor-pointer">User-Name</p>
               <p className="text-[7px] -mt-1 cursor-pointer">Profile</p>
              </Link>
              }
                        
                       
              </span>
        </div>
    </div> 
    <>
       
     <div  className={!menu ? "bg-secondary  text-textcolor  top-0 h-screen fixed  p-3   left-0 z-0 md:w-10 w-5  ease-in-out duration-1000 ": "fixed -left-10 w-[-40px] ease-in-out duration-1000"}>
     <div className=" md:left-3 left-1 top-4 absolute text-textcolor cursor-pointer md:scale-100 scale-50  "  >
        <FaBars size={18} onClick={()=>setMenu(!menu)}  />
       
        </div>
   <div className="absolute md:left-3 left-1 bottom-8  rotate-90 text-textcolor cursor-pointer md:scale-100 scale-50 ">
            <BsDownload size={20} rotate={45}  onClick={()=>setMenu(!menu)}/>
        </div>
   
 </div>  
    </>
   
      </>
  )
}

export default Nav
