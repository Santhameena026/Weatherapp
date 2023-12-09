import React, { useState,useEffect } from 'react'
import cold from "./cold.jpeg";
import hot3 from "./hot3.jpg";
import "./home.css";
import { GrSearch } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import {Row,Col} from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import {Link} from "react-router-dom";

const Home = () => {

    const [cityname,SetCityName] = useState("");
    const [current,setCurrent] = useState("");
    const [location,setLocation] = useState("");
    const [bg,setBg] = useState(cold)
  
    const fetchdata = async() => {
      const resp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6285501af7934149a17110304230212&q=${cityname}&days=7&aqi=no&alerts=no`);
      const tempdata = await resp.json();
      console.log(tempdata);
      setCurrent(tempdata.current); 
      setLocation(tempdata.location);
      SetCityName("");
     
      if (tempdata.current.temp_c <= 20 ) setBg(cold);
      else setBg(hot3);
    }

  return (
    <div className='bgcolor' style={{backgroundImage:`url(${bg})`}}>
    <div className='d-flex justify-content-center'>
    <input
    type='text'
    placeholder='Enter City Name...'
    className=' mt-4 text-center inputbox' 
    value={cityname}
    onChange={(e) => SetCityName(e.target.value)}/>
    <button onClick={() => fetchdata()} className=' mt-4 searchbtn' ><GrSearch /></button>
    </div>

    <div>
      {location &&(
     <div>
        <h1 className='text-center mt-5'>{location.name}</h1>
     <div className='d-flex justify-content-center mt-5 gap-2'>
     <div className="card locationcard">
     <div className="card-body ">
      <div className='text-center location'><span className='mx-2'><GrLocation /></span>{location.region},{location.country}</div></div>
     </div>
     </div></div>)}
    </div>

    <div>
      {current&& (
      <div>
        <Row>
         <Col>
          <div className='d-flex justify-content-end mt-5'>
           <div className='card tempcard'>
            <div className='card-body'>
              <div className='tempdata'>{current.temp_c} &deg; C</div>
            </div>
           </div>
          </div>
         </Col>
         <Col>        
         <div className='mt-5'>
          <div className='card iconcard'>
            <div className='card-body '>
            <div className='d-flex justify-content-center'><img src={current.condition.icon} height={"55px"} width={"55px"}/></div><div className='text-center ' style={{fontSize:"18px"}}>({current.condition.text})</div>
            </div>
            </div>
          </div>
        </Col>

        </Row>

        <div className="text-center mt-5">
          <Link to ="/signup" ><button className='morebtn'>More Information<span className='ms-1'><FaArrowRight /></span></button></Link>
        </div>  
      </div>
        
      )}
    </div>
  
   
  
   </div>
  )
}

export default Home