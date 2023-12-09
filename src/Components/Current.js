import React from 'react'
import './current.css';


const Current = ({current,city}) => {
  return (
    <div>
        <div className='d-flex justify-content-center mt-3 text-primary'>
        <b className='w-50 text-center discityname' style={{textShadow:"1px 1px white"}}>{city}  Current Weather</b>
        </div>

        <div className='mt-3 d-flex justify-content-center'>
        <table className="table w-75" style={{borderSpacing:"30px"}}>
        <thead className='tablebg'>
          <tr>
             <td className='text-center' style={{backgroundColor:"orange",fontSize:"18px"}}><img src={current.condition.icon}/></td>
             <td className='text-center' style={{backgroundColor:"orange",fontSize:"18px",fontWeight:"500"}}><p className='mt-4 '>Temperature</p></td>
             <td className='text-center' style={{backgroundColor:"orange",fontSize:"18px",fontWeight:"500"}}><p className='mt-4 '>Feels like</p></td>
             <td className='text-center' style={{backgroundColor:"orange",fontSize:"18px",fontWeight:"500"}}> <p className='mt-4 '>wind Speed</p></td>
          </tr>
        </thead>
        <tbody>
         <tr>
             <td className='text-center text-primary' style={{backgroundColor:"orange",fontWeight:"700",fontSize:"18px"}}><p>{current.condition.text}</p></td>
             <td className='text-center text-primary' style={{backgroundColor:"orange",fontWeight:"700",fontSize:"18px"}}> <p>{current.temp_c} &deg; C</p></td>
             <td className='text-center text-primary' style={{backgroundColor:"orange",fontWeight:"700",fontSize:"18px"}}><p>{current.feelslike_c}  &deg; C</p></td>
             <td className='text-center text-primary' style={{backgroundColor:"orange",fontWeight:"700",fontSize:"18px"}}><p>{current.wind_kph}  &deg; C</p></td>
         </tr>
        </tbody>
       </table>
       </div>

   </div>
  )
}

export default Current