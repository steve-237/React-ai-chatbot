import {useState} from "react";
import styles from "./App.module.css";
import { Chat } from "./components/Chat/Chat";

function App() {
  const [messages, setMessages] = useState(MESSAGES);

  return (
   <div className={styles.App}>
    <header className={styles.Header}>
      <img className={styles.Logo} src="/chat-bot.png" />
      <h2 className={styles.Title}>AI Chatbot</h2>
    </header>
    <div className={styles.ChatContainer}>
      <Chat messages={messages}/>
    </div>
   </div>
  )
}

const MESSAGES = [
  {
    role: 'user',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus cum ducimus dolorum non aut possimus vero, itaque illum architecto veritatis reprehenderit saepe alias sapiente? Non tempore veniam repellendus accusamus."
  },
  {
    role: 'assistent',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus cum ducimus dolorum non aut possimus vero, itaque illum architecto veritatis reprehenderit saepe alias sapiente? Non tempore veniam repellendus accusamus."
  },
  {
    role: 'user',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus cum ducimus dolorum non aut possimus vero, itaque illum architecto veritatis reprehenderit saepe alias sapiente? Non tempore veniam repellendus accusamus."
  },
  {
    role: 'assistent',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus cum ducimus dolorum non aut possimus vero, itaque illum architecto veritatis reprehenderit saepe alias sapiente? Non tempore veniam repellendus accusamus."
  },
  {
    role: 'user',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus cum ducimus dolorum non aut possimus vero, itaque illum architecto veritatis reprehenderit saepe alias sapiente? Non tempore veniam repellendus accusamus."
  },
  {
    role: 'assistent',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus cum ducimus dolorum non aut possimus vero, itaque illum architecto veritatis reprehenderit saepe alias sapiente? Non tempore veniam repellendus accusamus."
  },
  {
    role: 'user',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus cum ducimus dolorum non aut possimus vero, itaque illum architecto veritatis reprehenderit saepe alias sapiente? Non tempore veniam repellendus accusamus."
  },
  {
    role: 'assistent',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus cum ducimus dolorum non aut possimus vero, itaque illum architecto veritatis reprehenderit saepe alias sapiente? Non tempore veniam repellendus accusamus."
  },
  {
    role: 'user',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus cum ducimus dolorum non aut possimus vero, itaque illum architecto veritatis reprehenderit saepe alias sapiente? Non tempore veniam repellendus accusamus."
  },
  {
    role: 'assistent',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus cum ducimus dolorum non aut possimus vero, itaque illum architecto veritatis reprehenderit saepe alias sapiente? Non tempore veniam repellendus accusamus."
  }
]

export default App
