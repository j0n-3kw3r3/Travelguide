import Section1 from "./Section1";
import Footer from "./Footer";
import Hero from "./Hero";
import Section2 from "./Section2";

const View = () => {

 
 
  return (
    <div className= ' top-0 left-0 right-0 bottom-0 z-0 w-screen relative '>
      <Hero/>
        <div className=" w-[80%] relative mx-auto mt-8  ">
                     
                <Section1 />
                <Section2/>
                <Footer/>
                
        </div>
           
    </div>
  )
}

export default View
