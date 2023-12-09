import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import './forecast.css';



const Forecast = ({city,forecast:{forecastday}}) => {
    const [expanded, setExpanded] = React.useState(false);
    console.log(forecastday)
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

   
  
  return (
    
    <div>
      <div className='text-center text-primary'> <p style={{fontWeight:"800",fontSize:"20px",textShadow:"1px 1px white"}}>Daily and Hourly Forecast for {city}</p></div>

      <div className='mt-3 '>
        {forecastday.map(curDateForecast => {
          console.log(curDateForecast)  
          const {date,day,hour}= curDateForecast;  
          const {maxtemp_c,mintemp_c,daily_chance_of_rain,condition:{icon,text}} = day;
        return(
        <Accordion expanded={expanded === date} onChange={handleChange(date)} className=''>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='bs-primary'
        >
        
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <div className=' text-center'><img src={icon} width="50px" height="50px"/></div>
            </Grid>
            <Grid item xs={2}>
              <p className='mt-2 text-center' style={{fontWeight:"630"}}> {date} </p>
            </Grid>
            <Grid item xs={3}>
              <p className='mt-2 text-center' style={{fontWeight:"630"}}>{text}</p>
            </Grid>
            <Grid item xs={3}>
              <p className='mt-2 text-center' style={{fontWeight:"630"}}>Temp: {mintemp_c}&deg;C - {maxtemp_c}&deg;C</p>
            </Grid>
            <Grid item xs={3}>
              <p className='mt-2 text-center' style={{fontWeight:"630"}}>{daily_chance_of_rain} % of rain possible</p>
            </Grid>
         </Grid>
       </AccordionSummary>
        <AccordionDetails>
          {hour.map((curHourForeCast,index)=>{
            return(
              <div>
                  <Grid container spacing={2}>
                     <Grid item xs={1}>
                        <div className='text-center mt-3'><b>{index}:00</b></div>
                     </Grid>
                     <Grid item xs={2}>
                         <p className='text-center'><img src={curHourForeCast.condition.icon} width="50px" height="50px"/> </p>
                     </Grid>
                     <Grid item xs={9}>
                        <p className='text-center mt-4'>    <LinearProgress variant="determinate" value={curHourForeCast.temp_c*100/maxtemp_c} /></p>
                        <span className=''>{curHourForeCast.temp_c} &deg;C</span>
                     </Grid>
                  </Grid>
              </div>
            )
          })}
        </AccordionDetails>
        </Accordion>)})}
       </div>
    
    </div>
  )
}

export default Forecast