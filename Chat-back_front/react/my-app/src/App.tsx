import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import io , {Socket} from "socket.io-client";
import MessageInput from "./MessageInput"
import Messages from "./Messages"

function App() {
 const [socket ,setSocket] = useState<Socket>()
	const [messages, setMessages] = useState<string[]>([])

  const send = (value: string) => {
		socket?.emit("message", value);
	}
  useEffect(() => {
			const newSocket = io("http://localhost:8001")
			setSocket(newSocket);
	}, [setSocket])


  const messageListener = (message: string) => {
		setMessages([...messages, message])
	}
	useEffect(() => {
		socket?.on("message", messageListener)
		return () => {
			socket?.off("message", messageListener)
		}

	}, [messageListener])
  return (
    <div className="App">
        <MessageInput send={send}/>
        <Messages messages={messages}/>
    </div>
  );
}

export default App;
