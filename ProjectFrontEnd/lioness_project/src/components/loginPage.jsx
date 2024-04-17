import { useState } from 'react'
import { api } from '../utilities'
import { useNavigate, useOutletContext } from 'react-router-dom'
import '../project css /signUPpage.css'



export default function LogIN() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const {setUser} = useOutletContext()

  const handleLogIN = async (e) => {
    e.preventDefault()
    const response = await api.post('users/login/', {email, password})
    if (response.status === 200) {
      console.log('User logged in', response.data)
      const {token} = response.data;
      localStorage.setItem('token', token)
      api.defaults.headers['Authorization'] = `Token ${token}`
      setUser({email: email})
      navigate('/info')
    }

  }
      

    return (
      <div className='sign-container' onSubmit={handleLogIN}>
        <div className='sign-header'>
          <div className="sign-text">Log In</div>
          <div className="sign-underline"></div>
        </div> 
        <div className="sign-inputs">
          <div className="sign-input">
            <img src="" alt=''/>
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="@Email"/>
          </div>
          <div className="sign-input">
            <img src="" alt=''/>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
          </div>
        </div>  
        <div className="submit-container">
        
        <div className="submit" onClick={handleLogIN}>Login</div>   
        </div>
      </div>
    );
  }