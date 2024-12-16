import React,{useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
  const navigate = useNavigate()
  const token=localStorage.getItem('token')
 
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`,
    {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
  ).then((res)=>{
    
    if(res.status===201 || res.status===200){
        console.log("logout is gonna happen")
        localStorage.removeItem('token');
        navigate('/login')
    }
  })
  })
  
  return (
    <div>
      l
    </div>
  )
}
export default UserLogout
