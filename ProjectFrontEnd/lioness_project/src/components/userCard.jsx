import { useEffect, useState } from "react"
import {api} from '../utilities'
import { NounIcom } from "../utilities";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import UserUpdate from "./userUpate";




export default function UserInfo() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
 
    const [nounIconUrl, setNounIconUrl] = useState('');
    const [show, setShow] = useState(false);
    
    

    const handleClose = () => setShow(false);
    const handleShow = () =>  setShow(true);
    
    // console.log(show)
   
    useEffect(() => {
        if (!show) {
            getUserInfo()
            // handleUpdate()
        }
    }, [show])


    const getUserInfo = async () => {
        const response = await api.get('/users/info')
        setUsername(response.data.info.username.slice(0,9))
        setEmail(response.data.info.email)
        setFirstName(response.data.info.first_name)
        setLastName(response.data.info.last_name)
     

        // console.log(response.data)
    
    }

    useEffect(() => {

        getUserInfo()
    }, [])

   
        
      
        useEffect(() => {
          const fetchNounIcon = async () => {
            try {
              const data = await NounIcom();
              if (data) {
                setNounIconUrl(data); // Assuming the URL is available as 'url' in the response data
              }
            } catch (error) {
              console.error("Error fetching noun icon:", error);
            }
          };

      
          fetchNounIcon();
        }, []);

        
   
    
    return (
        <>
      
        <Card className='Card'style={{ width: '18rem', display:"flex", alignContent:'center'}}>
      <Card.Img className='CardImage'variant="top" src={nounIconUrl} />
      <Card.Body className="Card-info">
        <Card.Title>{username}</Card.Title>
        <Card.Text className="user-info-list">
            <ul>
                <li>First Name: {firstName}</li>
                <li>Last Name: {lastName}</li>
                <li>Email: {email}</li>
                
            </ul>
        </Card.Text>
       <Button variant="primary" onClick={handleShow}>Update Details</Button>
      </Card.Body>
    </Card>
    
       <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>Update User Profile Info</Offcanvas.Header>
        <Offcanvas.Body>
            <UserUpdate />
        </Offcanvas.Body>
      </Offcanvas>
    </>
    );
}