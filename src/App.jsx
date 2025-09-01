import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


import AdminDashboard from './pages/Admindashboard'

import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
{/* <Nav/>
<Hero/>
<AllEvents/> */}
   <BrowserRouter>
   <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/admin' element={<AdminDashboard/>}/>
   </Routes>
   
   </BrowserRouter>
  
   </>
  )
}

export default App
