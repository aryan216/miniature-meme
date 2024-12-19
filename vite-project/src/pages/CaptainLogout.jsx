import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const CaptainLogout = () => {
  
  const captaintoken=localStorage.getItem('captaintoken');
  const navigate=useNavigate();
  
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`,{
        headers:{
            Authorization:`Bearer ${captaintoken}`
        }
    }).then((res)=>{
        if(res.status===201 || res.status===200){
            console.log("logout is gonna happen")
            localStorage.removeItem('captaintoken');
            navigate('/captain-login');
        }


    })
    
  })

  return (
    <div>
      CaptainLogout
    </div>
  )
}

export default CaptainLogout
