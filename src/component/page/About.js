import React from 'react'
import cover1 from "../img/pexels-amine-m'siouri-2108845.jpg"
import cover2 from "../img/pexels-spencer-davis-4353813.jpg"
import cover3 from "../img/pexels-jaxson-bryden-2040627.jpg"

const About = () => {
  return (
    <div className='w-[80%]  mx-auto '>
      <div className=" py-8 text-extra ">
      
        <h1 className='uppercase text-center w-full  tracking-widest font-black text-lg my-2 '>About us</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      
      </div>
      <div className=' grid grid-cols-2 my-8 shadow-lg'>
        <div className=' bg-extra md:h-[500px] text-textcolor px-12 py-4 md:py-40 gap'>
            <h1 className='my-4 font-medium uppercase text-lg'>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aperiam architecto itaque dicta nobis ipsum nulla, aut temporibus porro a dignissimos pariatur iste omnis ducimus? Tempora reprehenderit ea nam rerum, sint optio dicta, modi ratione veniam officiis ut aspernatur autem!</p>
        </div>
        <div>
          <img src={cover1} alt="" className=' object-cover h-72 md:h-[500px] w-full'/>
        </div>

      </div>
      <div className=' grid grid-cols-2 my-8 shadow-xl'>
        <div>
          <img src={cover2} alt="" className=' object-cover h-72 md:h-[500px] w-full'/>
        </div>
        <div className=' text-extra h-72 md:h-[500px] py-4 md:py-40  bg-gray-50  p-12 gap'>
            <h1 className='my-4  font-medium uppercase text-lg'>Our Approch</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aperiam architecto itaque dicta nobis ipsum nulla, aut temporibus porro a dignissimos pariatur iste omnis ducimus? Tempora reprehenderit ea nam rerum, sint optio dicta, modi ratione veniam officiis ut aspernatur autem!</p>
        </div>

      </div>
      <div className=' grid grid-cols-2 my-8 shadow-lg'>
        <div className=' bg-extra h-72 md:h-[500px] text-textcolor py-4 md:py-40 p-12 gap'>
            <h1 className='my-4  font-medium uppercase text-lg'>Our Process</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aperiam architecto itaque dicta nobis ipsum nulla, aut temporibus porro a dignissimos pariatur iste omnis ducimus? Tempora reprehenderit ea nam rerum, sint optio dicta, modi ratione veniam officiis ut aspernatur autem!</p>
        </div>
        <div>
          <img src={cover3} alt="" className=' object-cover h-72 md:h-[500px] w-full'/>
        </div>

      </div>
        <div className=' bg-extra grid grid-cols-2 py-12 text-textcolor'>
          <div>
            <h1 className='text-lg text-center'>Sign up now for our Discount product</h1>
          </div>
          <div className='px-10'>
            <input type="text" name="" placeholder='Name' className='p-1' id="" />
            <button className=' bg-primary py-1 px-2'>Subsribe</button>
          </div>
        </div>
    </div>
  )
}

export default About
