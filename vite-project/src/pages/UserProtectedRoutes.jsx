import React, { useContext,useEffect } from 'react'
import { UserDataContext } from '../context/Usercontext'
import { useNavigate } from 'react-router-dom'

const UserProtectedRoutes = ({children}) => {
  const {user} = useContext(UserDataContext)
  const token=localStorage.getItem('token')
  const navigate=useNavigate()

  useEffect(()=>{
    if(!token){
        navigate('/login')
    }
  },[token,navigate])
    return (
    <div>
      {children}
    </div>
  )
}

export default UserProtectedRoutes
