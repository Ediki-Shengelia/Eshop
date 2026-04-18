import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import { path } from './route/path'
import Post from './components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path={path.login} element={<Login/>}/>
      <Route path={path.register} element={<Register/>}/>
      <Route path={path.dashboard} element={<Dashboard/>}/>
      <Route path={path.postId} element={<Post/>}/>
    </Routes>
    </>
  )
}

export default App
