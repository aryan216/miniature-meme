import React,{useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContext'

const CaptainProtectedRoutes = ({children}) => {
    const navigate=useNavigate();
    const {captain,setCaptain}=useContext(CaptainDataContext)
    const captaintoken=localStorage.getItem('captaintoken');

    useEffect(()=>{
        if(!captaintoken){
            navigate('/captain-login')
        }
    },[captaintoken,navigate])

    return (
    <div>
       {children}
    </div>
  )
}

export default CaptainProtectedRoutes
