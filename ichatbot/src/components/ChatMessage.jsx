import RobotProfileImage from '../assets/robot.png'; //We just gave it a name: a default export
import UserProfileImage from '../assets/user.png'; // Vite let's import any type of file. This is a default export: we just give it a name 
import './ChatMessage.css';
// Display text & show image based on sender
export function ChatMessage({message, sender}){ 
  return(
    <div className={sender === 'user'? 'chat-message-user': 'chat-message-robot'}>
      {sender ==='robot' && <img src={RobotProfileImage} className="chat-message-profile" />}
      
      <div className="chat-message-text">
        {message}
      </div>

      {sender === 'user' && <img src={UserProfileImage} className="chat-message-profile" />}

    </div>
  );
  
}