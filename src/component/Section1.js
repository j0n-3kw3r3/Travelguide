import axios from "axios";
import { useEffect, useState } from "react";

const Section1 = () => {
     

        const [imgs, setImgs] = useState(null)
     
        
        useEffect(()=>{
            const getHotel=async()=>{
                const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos',
  params: {hotel_id: '363464'},
  headers: {
    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
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
    <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-4   ">
        { imgs &&
            imgs.slice(0, 12).map((items, index)=>{

        return <div className="max-w-[200px] bg-textcolor rounded  shadow-lg grid" key={index}>
            <img src={items.mainUrl} className="w-full h-28 object-cover" alt="/" />

            <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">Hotel name</div>
                <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="px-6 pt-2    pb-2 ">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">#stay</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">#airport</span>

            </div>
        </div>
      
            })
        }
    </div>
  )
}

export default Section1
