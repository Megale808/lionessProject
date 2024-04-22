
import { api } from "../utilities";
import { useEffect, useState } from "react";



export default function UserUpdate() {
    const [userEmail, setUserEmail] = useState('')
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [status, setStatus] = useState('You have not updated your info yet')
   
    
    

    
    useEffect(() => {
    const getUserInfo = async () => {
        const response = await api.get('/users/info/')

        if (response.data.info.email !== null) {
            setUserEmail(response.data.info.email)
        }
        if (response.data.info.first_name !== null) {
            setUserFirstName(response.data.info.first_name)
        }
        if (response.data.info.last_name !== null) {
            setUserLastName(response.data.info.last_name)
     
        }
        console.log(response.data)
    }
    getUserInfo()
    }, [])

    


    const handleUpdate = async (e) => {
        e.preventDefault()
        const response = await api.put('/users/info/', {
            email: userEmail,
            first_name: userFirstName,
            last_name: userLastName,
            
        })
        if (response.status === 200) {
            setStatus('User Info Updated')
            console.log('User Info Updated')
        }else {
            console.log('User Info Not Updated')
        }
    }

   

    return (
        <> 
           <div>
                <h3>{status}</h3>
                <form onSubmit={handleUpdate}>
                     <label>Email</label>
                     <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                     <label>First Name</label>
                     <input type="text" value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)} />
                     <label>Last Name</label>
                     <input type="text" value={userLastName} onChange={(e) => setUserLastName(e.target.value)} /> <br />
                     <button type="submit">Update</button>
                </form>
           </div>
        </>
    );
    }