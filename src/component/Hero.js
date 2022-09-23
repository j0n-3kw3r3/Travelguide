import hero from "./img/pexels-min-an-749129.jpg"
import {GiPalmTree} from   "react-icons/gi";
import {BiHotel} from   "react-icons/bi";
import {MdFlight} from   "react-icons/md";
import {FaCar} from   "react-icons/fa";
import {FaTaxi} from   "react-icons/fa";
import {FaCalendarDay} from   "react-icons/fa";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useContext, useState } from "react";
import {format} from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { brandName } from "./brand/BrandContext";
import { UserAuth } from "../firebase-config/Auth";
import { UserContext } from "./ProfileContext";

const Hero = () => {
  
  const {user, logout} = UserAuth()
  const {data} = UserContext()
  const value= useContext(brandName)
    const [date, setDate] = useState(  [
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
      ])
      const [openDate, setOpenDate]  = useState(false)
      const navigate = useNavigate()

      const handleLogout = ()=>{
        try {
          logout()
          navigate('/')
          console.log("You are logged out")
        } catch (e) {
          console.log(e.message)
        }
      } 
  return (
    <div>
              <div className='h-[350px] md:h-80  relative bg-secondary '  >
          <div className=" relative w-full h-full">

          <img src={hero} alt="/" className=" w-[100
          5] z-0 h-[100%] md:h-80 mix-blend-burn opacity-50 object-cover"/>
          </div>
             <div className=" w-[80%] absolute right-0 left-0  top-0 mx-auto h-full   ">

              <div className="relative flex w-full h-9 pt-1  top-8 justify-between">
                <h1 className=" uppercase  text-lg font-semibold text-textcolor">{value}</h1>

            {user?
             <button className='px-3 mr-4 py-[4px] top-[-10px] rounded border  font-normal border-textcolor text-textcolor  hover:tracking-wider hover:px-4 hover:py-2 hover:border hover:border-primary  hover:mr-2 hover:text-primary ease-in-out duration-300' to='registration' onClick={handleLogout}>Logout</button>
              :
              <div>
              <Link className='px-3 mr-4 py-[4px] top-[-10px] rounded border  font-normal border-textcolor text-textcolor  hover:tracking-wider hover:px-4 hover:py-2 hover:border hover:border-primary  hover:mr-2 hover:text-primary ease-in-out duration-300' to='registration'>Register</Link>

           
            <Link className='px-3  py-[4px] rounded bg-secondary text-textcolor  hover:tracking-wider hover:px-4  hover:py-[5px] hover:border hover:border-primary hover:m-[-2px] hover:ml-[4px] hover:text-primary ease-in-out duration-200' to="login">Login</Link>
              </div>
          }
            
         
              </div>
            {user?
            <>
                
            <h1 className='md:text-3xl  uppercase relative top-20  text-primary  md:font-black text-3xl text- w-full  mx-auto cursor-default'>Welcome {data.fullName}🤞</h1>
            <p className="mt-24 mb-12 text-textcolor">Get rewarded for your Travels - unlock instant savings of 10% or more with a free {value} account</p>
         
            
            </>
              :

                <>
                
                <h1 className='md:text-3xl  uppercase relative top-20  text-primary  md:font-black text-3xl text- w-full  mx-auto cursor-default'>Travel a life time with us today 🤞</h1>
                <p className="mt-24 text-textcolor">Get rewarded for your Travels - unlock instant savings of 10% or more with a free {value} account</p>
              <button className="border border-primary rounded bg-secondary  mt-4 py-2 px-4 uppercase text-textcolor" ><Link to="/registration">Sign-in / Register</Link></button>
                
                </>
              
            }
             <ul className="flex justify-between w-full mt-4 text-textcolor md:text-base">
              <li className="flex justify-between mx-1 hover:tracking-wider hover:text-primary cursor-pointer gap-2 relative py-2  top-0 "><MdFlight/>Flight</li>
              <li className="flex justify-between mx-1 hover:tracking-wider hover:text-primary cursor-pointer gap-2 relative py-2  top-0 "><BiHotel/><Link to="hotel">Hotel</Link> </li>
              <li className="flex justify-between mx-1 hover:tracking-wider hover:text-primary cursor-pointer gap-2 relative py-2  top-0 "><FaCar/> rentals</li>
              <li className="flex justify-between mx-1 hover:tracking-wider hover:text-primary cursor-pointer gap-2 relative py-2  top-0 "><GiPalmTree/>Attractions</li>
              <li className="flex justify-between mx-1 hover:tracking-wider hover:text-primary cursor-pointer gap-2 relative py-2  top-0 "><FaTaxi/>Airport Taxes</li>
            </ul>
      
        </div>
             </div>

        <div className="   w-[80%] relative mx-auto  top-[-15px]  bg-extra ring ring-secondary shadow-xl rounded text-textcolor text-xs justify-between    flex">
          <div className=" border-l border-l-secondary px-2 py-2 align-middle  text-center justify-between mx-auto w-full flex">
       
            <p className="my-auto w-fit mx-auto gap-2 flex justify-between"><span><FaTaxi size={18}/></span> Where are you going?</p></div>
          <div className=" border-l border-l-primary   justify-between text-center my-auto mx-auto w-full flex"><div className="mx-auto "><FaCalendarDay onClick={()  =>setOpenDate(!openDate) } size ={18} /></div>
              { ` ${format(date[0].startDate,'MM/dd//yyyy')} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              { openDate &&  <DateRangePicker
          editableDateInputs={true}
        ranges={date}
        onChange={item =>  setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        className ="absolute bottom-[-330px] left-[0px] w-2 z-50 shadow-2xl scale-75"
      />}
            <p className="my-auto mx-auto">
              
             </p></div>
          <div className=" border-l border-l-primary my-auto text-center  w-full"><p className="my-auto mx-auto">4 adult • 0 children • 1 room</p></div>

          <div className="border-l border-l-primary mx-auto px-2 my-auto relative">

          <button className=" border font-bold border-primary text-primary  mx-auto py-1 px-3">Search</button>
          </div>
        </div>

    </div>
  )
}

export default Hero
