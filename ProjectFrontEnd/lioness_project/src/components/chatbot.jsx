import  { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { api } from '../utilities';

function Chatbot() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async (message) => {
  
    const response = await api.post('chatbot/', { _input: message });

  
    setChat([...chat, { message, isUser: true }]);
    setChat([...chat, { message: response.data.message, isUser: false }]);


    setMessage('');
  }

  return (
    <Container>
      <h1>Chatbot</h1>
      <div className="chat">
        {chat.map((chatMessage, index) => (
          <div key={index} className={`message ${chatMessage.isUser ? 'user' : 'chatbot'}`}>
            {chatMessage.message}
          </div>
        ))}
      </div>
      <Form onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
        <Form.Group>
          <Form.Control type="text" placeholder="Type your message here" value={message} onChange={(e) => setMessage(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default Chatbot;
