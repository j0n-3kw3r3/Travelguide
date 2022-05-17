import { useEffect, useState } from "react";


const Section2 = () => {
    const [imgs, setImgs] = useState(null)
     
        
    useEffect(()=>{
        const getHotel=async()=>{
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/hotels/photos',
  params: {locale: 'en-gb', hotel_id: '1377063'},
  headers: {
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY
  }
};

axios.request(options).then(function (response) {
	const imgData = response.data
    setImgs(imgData)
}).catch(function (error) {
	console.error(error);
});
}
getHotel()
}, [])

  return (
    <div>
       <div className="w-full my-16   ">
        {imgs &&
            imgs.slice(0, 7).map((items, index)=>{

        return <div className="md:h-[180px]  h-[120px] rounded-lg my-7 flex shadow-lg  overflow-hidden  bg-textcolor text-primary" key={index}>
            <div className='md:w-[35%] w-[400px]'>
                
            <img src={items.url_max} className="w-full h-full rounded-l-lg  shadow-inner  object-cover" alt="/" />
            </div>
            <div className="px-6 py-4">
                <div className="md:font-bold text-lg md:mb-2 -mt-2  cursor-pointer">{items.ml_tags[0].tag_name}</div>
                <p className=" md:text-sm text-[8px]  text-textcolor">Lorem ipsum dolor sit amet consectetur adipisicing elit. minima? Placeat impedit esse porro soluta saepe assumenda?.</p>

            <div className=" pt-2  pb-2 ">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">#{items.tags[0].tag}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">#{items.tags[1].tag}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">#{items.tags[0].tag}</span>

            </div>
            </div>
        </div>
      
            })
        }
    </div>
    </div>
  )
}

export default Section2
