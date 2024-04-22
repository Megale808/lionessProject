import { useState } from 'react'
import { Outlet, useLoaderData} from 'react-router-dom'
import NavBar from './components/navBar'
import './App.css'
import { api } from './utilities'
import Footer from './components/footer'


export const userChecks = async () => {
  const token = localStorage.getItem("token");
  if (token){
    api.defaults.headers.common['Authorization'] = `Token ${token}`
    const response = await api.get('users/info/')
      if (response.status === 200) {
        console.log('User logged in', response.data)
        return response.data
    }else {
    console.log('User not logged in')
    return null
    }
  }else {
    console.log('User not logged in')
    return null
  }
}

function App() {
  const [user, setUser] = useState(useLoaderData())


  
 
  return (
    <>
      <NavBar user={user}/>
      <Outlet context={{user, setUser}}/>
      <Footer/>
    </>
  )
}

export default App
