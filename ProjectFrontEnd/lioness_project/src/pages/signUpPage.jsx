import { useState } from 'react'
import { api } from '../utilities'
import { useNavigate, useOutletContext } from 'react-router-dom'
import '../project css /signUPpage.css'



export default function SignUP() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const {setUser} = useOutletContext()

  const handleSignUP = async (e) => {
    e.preventDefault()
    const response = await api.post('users/signup/', {email, password})
    if (response.status === 201) {
      console.log('User created', response.data)
      const {token} = response.data;
      localStorage.setItem('token', token)
      api.defaults.headers['Authorization'] = `Token ${token}`
      setUser({email: email, password: password})
      navigate('/profile')
    }
    
  }
  
      

    return (
      <div className='sign-container' onSubmit={handleSignUP}>
        <div className='sign-header'>
          <div className="sign-text">Sign Up</div>
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
        <div className="submit" onClick={handleSignUP}>Sign Up</div> 
        </div>
      </div>
    );
  }