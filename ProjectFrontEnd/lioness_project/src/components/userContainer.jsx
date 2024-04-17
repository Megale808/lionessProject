import { useEffect, useState } from "react"
import {api} from '../utilities'




export default function UserContainer() {
    const [sessions, setSessions] = useState([])
    const [packages, setPackages] = useState([])

    useEffect(() => {
        const getContainer = async () => {  
            const response = await api.get('container/')
            setSessions(response.data.sessions)
            console.log(response.data)
            setPackages(response.data.sessions[0].packageID)
            console.log(response.data.sessions[0].packageID)
        }
        getContainer()
    }, [])


    return (
        <>
            <h3>~ Photo Sessions Details ~</h3>
            <div className="sessions-container">
                {sessions.map((session, index) => (
                    <div key={index}>
                        <h4> {session.status}</h4>
                        <div className="session-times">Default Session Time: {session.session_duration}
                         <div>
                            <input type="checkbox" id="timer" name="30mins" value="30"/>
                            <label> 30 mintues</label>
                            <input type="checkbox" id="timer" name="45mins" value="45"/>
                            <label> 45 mintues</label>
                            <input type="checkbox" id="timer" name="60mins" value="60"/>
                            <label> 60 mintues</label>
                            <input type="checkbox" id="timer" name="120mins" value="120"/>
                            <label> 120 mintues</label>
                         </div>
                        <p>{session.date_time}</p>
                        <input type="datetime-local" />
                        <p>$ {session.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="package-details">
                <h4>~ Package Details ~</h4>
                <p className="pack-details">{packages.package_name}</p>
                <p className="pack-details">{packages.package_info}</p>
                <p className="pack-details">{packages.package_price}</p>
                <div className="package-buttons">
                    <button className="pack-button">ADD</button>
                    <button className="pack-button">DELETE</button>
                </div>
            </div>
        </>
    )
}