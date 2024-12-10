import './index.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import CaptainSignup from './Pages/CaptainSignup'
import CaptainLogin from './Pages/CaptainLogin'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
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
        </Routes>  
    </div>
  )
}

export default App
