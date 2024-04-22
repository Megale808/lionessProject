import { useEffect, useState, useRef} from "react"
import {api} from '../utilities'
import Button from 'react-bootstrap/Button';
import UpdateUserContainer from "./updateUserContainer";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';





export default function UserContainer() {

    // Getting the container from the backend
    const [sessions, setSessions] = useState([])
    
 
    // Offcanvas for updating user profile
    const [show, setShow] = useState(false);


    // Refreshing the page from the delete button
    const [render, setRender] = useState(false);
    const target = useRef(null);

    // Deleting a session API call All or Single
    const deleteInput = useRef(null)
    const deleteValue = useRef(null)

    



   
    // Refreshing the page from the create button
    const [refresh, setRefresh] = useState(false)

    
    

    // Getting the container from the backend
    const getContainer = async () => {  
                const response = await api.get('container/')
                setSessions(response.data.sessions)
    }
    useEffect(() => {
            
            getContainer()
    }, [render])

    console.log(sessions)
   
 
    // Creating a new session
    const createSession = async () => {
        if (sessions.length < 2){
            const response = await api.post('container/')
            setSessions([...sessions, response.data])
            setRefresh(!refresh)
            console.log(response.data)
        }else{
            console.log("You have reached the maximum amount of sessions")
        }   
    }
    
    // Deleting All session
    const handleAllDeleting = async () => {
        deleteInput.current.focus();
        if (deleteInput.current.value === "on"){
            const response = await api.delete('container/all/')
            console.log(response.data)
            console.log("Deleting all sessions") 
        }
        setRender(!render)    
    }

    // Deleting a single session
    const handleDeleting = async () => {
        deleteValue.current.focus(); 
        const response = await api.delete(`container/${deleteValue.current.value}/`)
        console.log(response.data.status)
        setRender(!render)
    }
    
    
    

    return (
        <>  
            
            <div className="sessions-container">
                <div className="sessions-session">
                {sessions.map((session, index) => (
                    <div key={index}>
                        <h4>ID: {session['id']}</h4>
                       <table className="table-container">
                        <th className="table-headers">Status</th>
                        <th className="table-headers">Date & Time</th>
                        <th className="table-headers">Price</th>
                        <th className="table-headers">Session Duration</th>
                        <tr>
                            <td className="table-content">{session.status}</td>
                            <td className="table-content">{session.date_time}</td>
                            <td className="table-content"> $ {session.price}</td>
                            <td className="table-content">{session.session_duration} mintues</td>
                        </tr>
                        </table>                       
                    </div>
                ))}
                </div>
                <div className="session-button-field">
                <Button onClick={() => createSession()}> Create</Button>
                <Button ref={target} onClick={() => setRender(!render)}>Delete</Button>
                <Overlay target={target.current} show={render} placement="left">
                    {(props) => (
                    <Tooltip id="overlay-example1" {...props}>
                        <div>
                            <div>
                                <h4>Warning</h4>
                                <h4>Would you like to delete all sessions?</h4>
                                <div>
                                    <input type="checkbox" name="deleteAll" id="deleteAll" ref={deleteInput}/>
                                </div>
                                <Button onClick={() => handleAllDeleting()}>Yes</Button>
                                <Button onClick={() => setRender(!render)}>No</Button>
                            </div>
                            <div>
                                <h4></h4>
                                <label > Which session would you like to delete ?</label>
                                <input id="delete" type="number" name="delete" ref={deleteValue} />
                                <Button onClick={handleDeleting}>Delete</Button>
                            </div>
                        </div>
                    </Tooltip>
                    )}
                </Overlay>
                <Button ref={target} onClick={() => setShow(!show)}> Click me! </Button>
                <Overlay target={target.current} show={show} placement="top">
                    {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                            <UpdateUserContainer/>
                        </Tooltip>
                    )}
                </Overlay>
                </div>
              
            </div>
            
        </>
    )
}