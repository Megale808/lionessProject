import PhotoPackage from "./photopackages";
import { api } from '../utilities'
import { useEffect, useState } from 'react';


export default function UpdateUserContainer() {
    const [userSessions, setUserSessions] = useState([])
    const [sessionId, setSessionId] = useState([])
    const [selectedSession, setSelectedSession] = useState([])
    const [packageId, setPackageId] = useState([])
    const [value, setValue] = useState('')
    const [status, setStatus] = useState('')
    

 
    
    const getContainer = async () => {
        const response = await api.get('container/')
        setPackageId(response.data.sessions[0].packageID)
        setUserSessions(response.data.sessions)
        {userSessions.map(session => {
            setSessionId(session.id)
        })}
       
    }
    useEffect(() => {
        getContainer()
    }, [])
    
    const selectSession = async (event) => {
        setValue(event.target.value)
    }    
    useEffect(() => {
        selectSession()
    }, [sessionId])

    const filterSession = async () => {
        const sessNum = Number(value)
        console.log(sessNum)
        let filteredSession = userSessions.filter(session => session.id === sessNum)
        console.log(filteredSession)
        setSelectedSession(filteredSession)
        
    }
    useEffect(() => {
        filterSession()
    }, [value])

    const handleStatus = async () => {
        if (selectedSession[0] === undefined) {
            return 'Please select a session'
        } else {
            return selectedSession[0].status
        }
    }
  

    return (


        <div className="update-user-container">
              
            <div className="update-user-info">
                <div className="user-details">
                    <h4>Please select a session</h4>
                        <select name="session-ids" id="" value={value} onChange={selectSession}> 
                        <option value="">Select a session</option>
                        {userSessions.map((session, index) => (
                            <option key={index} value={session.id}>{session.id}</option>
                        ))}
                        </select>       
                </div>
                <div className="session-details">
                    <h4>{handleStatus}</h4>
                    {selectedSession.map((session, index) => (
                        <div className="session-data" key={index}>
                            <div>
                                <h4>ID</h4>
                                <p>{session.id}</p>
                            </div>
                            <div>
                                <h4>Date & Time</h4>
                                <p>{session.date_time}</p>
                                <input type='datetime-local' className="datetime" />
                            </div>
                            <div>
                                <h4>Status</h4>
                                <p>{session.status}</p>
                            </div>
                            <div>
                                <h4>Price</h4>
                                <p>$ {session.price}</p>
                            </div>
                            <div>
                                <h4>Session Duration</h4>
                                <p>{session.session_duration} Mins</p>
                                <div>
                                    <span>45</span>
                                    <input type='checkbox' className="duration" />
                                    <span>60</span>
                                    <input type='checkbox' className="duration" />
                                    <span>120</span>
                                    <input type='checkbox' className="duration" />
                                    
                                </div>
                            </div>                            
                        </div>
                    ))}                
                    <div className="session-package">
                        <h4>Package</h4>
                        <select name="package" id="package">
                            <option value="1">Basic</option>
                            <option value="2">Standard</option>
                            <option value="3">Premium</option>
                        </select>
                    </div>
                    <div className="package-details">
                        
                    </div>
                    <div className="session-button">
                        <button>Update</button>
                    </div>
                </div> 
                
                {/* <PhotoPackage/>        */}
            </div>
            
        </div>

    );

}