import UserInfoCard from "../components/userCard"
import UserContainer from "../components/userContainer"
import ChatBot from "../components/chatbot";
import { Card } from "react-bootstrap";
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import PhotoPackage from "../components/photopackages";



export default function ProfilePage() {
 
    const [show, setShow] = useState(false);
    const target = useRef(null);


    return (
        <>
        <h1 className="info-page-title">Users Account</h1>
        <div className="page-content">
            <Card className="info-card">
                <Card.Body>
                    <Card.Title>Account Information</Card.Title>
                    <Card.Text>
                        <UserInfoCard/>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="session-card">
                <Card.Body>
                    <Card.Title>Session Information</Card.Title>
                    <Card.Text>
                        <UserContainer/>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="package-info-card">
                <Card.Body>
                    <Card.Title>Photo Packages</Card.Title>
                    <Card.Text>
                        <PhotoPackage/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        <div>
            <footer className="footer-container">
                <div className="footer-bot">
                <Button ref={target} onClick={() => setShow(!show)}>ChatBot</Button>
                    <Overlay target={target.current} show={show} placement="left">
                        {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                            <ChatBot/>
                        </Tooltip>
                        )}
                    </Overlay>
                </div>
            </footer>
        </div>
        </>
        
    )
}