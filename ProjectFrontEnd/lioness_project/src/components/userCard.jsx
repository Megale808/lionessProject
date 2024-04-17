import { useEffect, useState } from "react"
import {api} from '../utilities'
import { useOutletContext } from "react-router-dom"




export default function UserInfo() {
    const {setUser} = useOutletContext()
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    
    

    

   const saveUserInfo = async () => {
   
        const response = await api.put('users/info/', { first_name: firstName, last_name: lastName, phone: phoneNumber})
        if (response.status === 200) {
            console.log('User info updated', response.data)
            setUser({ firstName: firstName, lastName: lastName, phoneNumber: phoneNumber})

   }
}

    useEffect(() => {
        const saveInfo = async () => {
        let userInfo = await getUserInfo()
        setEmail(userInfo.info['email'])
        setFirstName(userInfo.info['first_name'])
        setLastName(userInfo.info['last_name'])
        setPhoneNumber(userInfo.info['phone'])
        console.log(userInfo.info)  
        }
        saveInfo()
        saveUserInfo()
    }, [])
    useEffect(() => {
        // console.log(email)
        // console.log(firstName)
        // console.log(lastName)
        // console.log(phoneNumber)
        
    }, [email, firstName, lastName, phoneNumber])

const getUserInfo = async () => {  
        const Token = localStorage.getItem('token')
        if (Token) {
        const response = await api.get('users/info/')
        if (response.status === 200) {
            console.log('User info', response.data)
            return response.data  
        }else{
            return null
        }
     }
    }
    
    return (
        <>
        <div>
            <div className="info-header">
                
        </div>
           <div>
                <div className="info-upade-header">
                     <div className="info-text">
                        <h2>~ User Info ~</h2>
                     </div>
                     <div className="info-underline"></div>
                </div>
                <div className="info-container">
                     <div className="info-input">
                          <div className="info-label">Email</div>
                          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                     </div>
                     <div className="info-input">
                          <div className="info-label">First Name</div>
                          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                     </div>
                     <div className="info-input">
                          <div className="info-label">Last Name</div>
                          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                     </div>
                     <div className="info-input">
                          <div className="info-label">Phone Number (optional)</div>
                          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                     </div>
                </div>
                <div className="info-button" onClick={() => setUser({ firstName: firstName, lastName: lastName, phoneNumber: phoneNumber})}>Save</div>
           </div>
        </div>
           
        </>
    )
}