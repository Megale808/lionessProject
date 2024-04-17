import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/navBar'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  console.log(user)


  
 
  return (
    <>
      <NavBar user={user}/>
      <Outlet context={{user, setUser}}/>
    </>
  )
}

export default App
