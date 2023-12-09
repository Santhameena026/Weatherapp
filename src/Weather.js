import React, { useEffect, useState } from 'react'

import Container from "react-bootstrap/Container";

import Current from './Components/Current';
import Forecast from './Components/Forecast';
import "./weather.css";

const autoCompleteURL = "https://api.weatherapi.com/v1/search.json?key=6285501af7934149a17110304230212&q="
const weatherURL =(city)=> `https://api.weatherapi.com/v1/forecast.json?key=6285501af7934149a17110304230212&q=${city}&days=7&aqi=no&alerts=no`

const Weather = () => {

    const [city,SetCity] = useState("");
    const [citySuggestion, setCitySuggestion] = useState([]);
    const [clicked,setClicked] = useState(false);
    const [current,setCurrent] = useState();
    const [forecast,setForeCast]= useState();
    const [location,setLocation] = useState("");

    const handleClick = async (clickedCity) =>{
      SetCity(clickedCity);
      setClicked(true);
      setCitySuggestion([]);

      const resp = await fetch(weatherURL(city));
      const data = await resp.json();
      SetCity("")
      setCurrent(data.current);
      setForeCast(data.forecast);
      setLocation(data.location.name);
    }

    useEffect(() => {
        const getDataAfterSetTimeout = setTimeout(() => {
            const fetchCitySuggestion = async () => {
                const resp = await fetch(autoCompleteURL + city);
                const data = await resp.json();
                const citySuggestionData = data.map((curdata) => `${curdata.name},${curdata.region},${curdata.country}`);
                setCitySuggestion(citySuggestionData);
            };
            if(!clicked && city.length>2){
                fetchCitySuggestion();
            }
            else{
                setCitySuggestion([]);
                setClicked(false);
            }
        },1000)
       
       return() => clearTimeout(getDataAfterSetTimeout)
    },[city])
  return (
    <Container fluid>
    <div className='forecastbg'>
        <div className='d-flex justify-content-center'>
            <input
            type='text' 
            className='w-50 mt-4 text-center inputcity p-3' 
            placeholder='Enter city name...'
            style={{height:"45px"}}
            value={city}
            onChange={(e) => SetCity(e.target.value)}
            />
        </div>

        {citySuggestion.length >0 &&(
        <div className='d-flex justify-content-center'>
        <ul className="list-group w-50 ">
         {citySuggestion.map((curCity) =>(
            <li className="list-group-item citylist " onClick={() => handleClick(curCity)}>{curCity}</li> 
         )) }
      
        </ul>
        </div>)}

        { current && 
        <Current
         current={current}
         setCurrent={setCurrent}
         city={location}
         />}
         <Container>
        { forecast &&
         <Forecast
         forecast={forecast}
         setForeCast={setForeCast}
         city={location}
         />}
         </Container>
    </div>
    </Container>
  )
}

export default Weather