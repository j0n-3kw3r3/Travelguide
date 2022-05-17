import { useState } from "react";
import Business from "./subHistory/Business";
import Private from "./subHistory/Private";


const TripHistory = () => {
        const [sub, setSub] = useState(false)
  return (
    <div className=" w-full p-4 ">
      <div className="w-full grid grid-cols-2 border mb-7">
          <div className={ sub == false ?" text-center p-4 cursor-pointer ring":"text-center p-4 cursor-pointer"}onClick={()=>{setSub(false)}}>Private</div>
          <div className={ sub == true ?" text-center p-4 cursor-pointer  ring": "text-center p-4 cursor-pointer"} onClick={()=>{setSub(!sub)}}>Business</div>
      </div>
      <div>
     {sub == false ? <Private/>
     
    :<Business/>
    }
    
      </div>
    </div>
  )
}

export default TripHistory
