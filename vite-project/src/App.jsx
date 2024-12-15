import './index.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Signup from './pages/Signup'
import Start from './pages/start'
import Login from './pages/Login'
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
          <Route path='/start' element={<Start/>}/>
          
        </Routes>  
    </div>
  )
}

export default App
