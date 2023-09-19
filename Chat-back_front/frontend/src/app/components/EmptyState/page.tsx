"use client"
import styles from "./page.module.css"
// import {useContext} from 'react'
import {useEffect, useState} from "react"
import {Socket} from "socket.io-client"
import {io} from "socket.io-client"
import MessageInput from "../Message/MessageInput"
import Message from "../Message/Message"
let  socket : any;
const EmptyState = () => {
	
	const [socket, setSocket] = useState<Socket>()
	const [messages, setMessages] = useState<string[]>([])

	const send = (value : string) => {
		socket?.emit("message", value)
	}

	useEffect(() => {
		const newSocket = io("http://localhost:8001")
		setSocket(newSocket);
	}, [])
	const messageListenner = (message : string) =>
	{
			setMessages([...messages, message])
	}

	useEffect(()=> {
		socket?.on("message", messageListenner)
		return () => {
			socket?.off("message", messageListenner)
		}
	}, [messageListenner])
    
    return (
        <div className="px-4 py-10 sm:px-6 lg:px-8 h-full f justify-center items-center bg-gray-200">
            
            <div className="text-center items-center flex flex-col">
                	<h3 className="mt-2 text-2xl font-semibold test-gray-900">Select chat or start a new conversation</h3>
					<MessageInput send={send}/>
					<Message messages={messages}/>
					
            </div>
			</div>
			
			
       
     );
}
 
export default EmptyState;