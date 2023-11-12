import React from 'react'
import { useState } from 'react'

const Birth = () => {
    const[date,setDate] = useState('');
    const[age,setage]=useState('');
    const[iscalculate,setisaclculate] = useState(false)

    const calculate_age = ()=>{
      if (date) {
        const birthDate = new Date(date);
        const today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth()- birthDate.getMonth();
        let days = today.getDate()-birthDate.getDate();
        
        if (months < 0 || (months === 0 && days < 0)) {
          years--;
          months = 12 + months;
        }

        if (days < 0) {
          const lastmonth = new Date(today.getFullYear(), today.getMonth()-1, birthDate.getDate() );
          const daysInlast = new Date(today.getFullYear(), today.getMonth(),0 ).getDate();
          

          days = daysInlast - lastmonth.getDate() + today.getDate();

          months--;
        }

        setage({ age_years : years , age_months : months , age_days : days});
        setisaclculate(true);
      }
    }

  return (
    <div className=' flex flex-col items-center mt-4 text-5xl justify-between bg-gradient-to-r from-gray-800 to-blue-500 rounded-xl ml-2 mr-2 p-3'>
      <label className=' text-white font-semibold mb-2'>Enter Your Date of Birth:</label>
      <input type='date' onChange={(e)=>{setDate(e.target.value)}} className=' mt-2 border rounded-md p-2 border-gray-900 cursor-pointer'></input>
      <button type='button' onClick={calculate_age} className=' font-bold border w-[350px] mt-5 p-2 border-gray-800 rounded-md bg-red-600 text-white hover:bg-blue-400'> Calculate Age </button>

      
      {iscalculate && <p className=' font-semibold font-sans mt-3 text-white '>Your Age is {age.age_years} years,{age.age_months} months,{age.age_days} days</p> }
      
    
    </div>
  )
}

export default Birth
