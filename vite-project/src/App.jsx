import './index.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Signup from './pages/Signup'
import Start from './pages/Start'
import Login from './pages/Login'
import UserProtectedRoutes from './pages/UserProtectedRoutes'
import UserLogout from './pages/USerLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainLogout from './pages/CaptainLogout'
import CaptainProtectedRoutes from './pages/CaptainProtectedRoutes'

function App() {
  
  return (
    <div >
        <div className='text-white bg-orange-400 h-14 w-full p-6 text-3xl flex items-center'>
                Vacation Saga
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/captain-login' element={<CaptainLogin/>}/>
          <Route path='/captain-signup' element={<CaptainSignup/>}/>
          <Route path='/start' element={
            <UserProtectedRoutes>
              <Start/>
            </UserProtectedRoutes>
          }/>
          <Route path='/user/logout' element={
            <UserProtectedRoutes>
               <UserLogout/>  
            </UserProtectedRoutes>}/>
            <Route path='/captain-home' element={
              <CaptainProtectedRoutes>
                <CaptainHome/>
              </CaptainProtectedRoutes>
            }/>
          <Route path='/captain/logout' element={
            <CaptainProtectedRoutes>
               <CaptainLogout/>
            </CaptainProtectedRoutes>
          }/>
        </Routes>  
    </div>
  )
}

export default App
