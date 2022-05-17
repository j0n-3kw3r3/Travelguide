
import {BsTelegram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className=" mt-8 bottom-0 right-0 left-0 bg-secondary">
      <div className="py-4 w-[80%] mx-auto text-xs text-textcolor">
          <div className=" w-[60%] mx-auto my-4 flex justify-between">
              <span className='text-blue-600 '>
          <FaFacebookF  size={30}/>
              </span>
              <span className='text-blue-500 '>
          <BsTelegram size={30}/>
              </span>
              <span className='text-blue-400 '>
          <AiFillTwitterCircle size={30}/>
              </span>
              <span className='text-red-600 '>
          <AiFillInstagram size={30}/>
              </span>
              
          </div>
              <div className="w-fit mx-auto">
                  <p className="font-bold text-center my-1">Contact us</p>
                  <p className='text-center'>Phone: +23409156506, +23470123498</p>
                  <p className='text-center'>Email: tavelguide@gmail.com</p>
              </div>
          <div className="flex  w-full justify-between mt-4">
              

            <p>Terms of use</p>
            <p>|</p>
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Site Map</p>
           
          </div>
          <p className="text-center my-2">&copy; Copyright 2022 All Right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
