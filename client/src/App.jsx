import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Projects from './pages/Projects'
import Header from './Components/Header'


function App() {

  return (
    <div className='h-screen bg-sky-900'>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={ <Dashboard/>} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/projects' element={<Projects />} />

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
