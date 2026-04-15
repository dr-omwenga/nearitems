import { useState } from 'react'; // A named export. Note: A common practise is to import from packages/ at the top, then jsx files, the other types of files
import { ChatInput } from './components/ChatInput';   // A named export. Note: Vite adds .jsx automatically in the end of this file path, so we don't have to add it manually
import ChatMessages from './components/ChatMessages';  // default export
import './App.css'

function App(){
  const [chatMessages, setChatMessages] = useState([{
      message: 'hello chatbot',
      sender: 'user',
      id: 'id1'
    }, {
      message: 'Hello! How can I help you?',
      sender: 'robot',
      id: 'id2'
    }, {
      message: 'What is todays date?',
      sender: 'user',
      id: 'id3'
    }, {
      message: 'Todays date is December 31',
      sender: 'robot',
      id: 'id4'
    }]
  );
  
  return (
    <div className="app-container">
    
      <ChatMessages chatMessages={chatMessages}  />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );

}

export default App

