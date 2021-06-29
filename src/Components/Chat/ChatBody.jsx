import React, { useState, useEffect, useRef } from 'react';
import '../../Css/ChatBody.css'
import { w3cwebsocket as WebSocket } from "websocket";
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { base } from '../../req';
import ReactTooltip from 'react-tooltip';


function ChatSideBar() {
    let { roomName } = useParams()
    const author = localStorage.getItem('author').slice(0, -10)

    const client = new WebSocket('ws://127.0.0.1:8000/ws/chat/' + roomName + '/');

    const [messages, setMessages] = useState([])
    const send_msg = useRef()
    const current_user = localStorage.getItem('author')

    const receiver = roomName.replace(author, '')


    useEffect(() => {
        
        axios.get(`${base}`).then(data => {
            let contents = []
            for(let key in data.data){
                if(data.data[key].room_name===roomName){
                    contents.push(data.data[key])
                }
            }
            setMessages(contents)
        })
        client.onopen = () => {
            console.log('connected')
        }
        client.onmessage = (message) => {
            
            const data_message = JSON.parse(message.data)
            

            if (data_message) {
                setMessages(prevArray => [...prevArray, data_message])
            }
        }
    }, [receiver])

    function Send_Msg() {
        client.send(JSON.stringify({
            type: "chat_message",
            message: send_msg.current.value,
            author: current_user.slice(0, -10),
            roomname: roomName,
        }))
        send_msg.current.value = ''
    }


    return (
        <div className="body" >
            <div>
                <div className="header-container">
                    <div className="body-card">
                        <img src={"https://ui-avatars.com/api/?background=random&name=" + receiver} alt="avater" />
                        <span className="user">{receiver}</span>
                        <span className="joined">Joined to you</span>
                    </div>
                </div>
                <div className="sending-msg">
                    <div>
                        <div className="send-msg">
                            <input type="text" placeholder="type name,username" ref={send_msg} />
                            <button onClick={Send_Msg}>Send</button>
                        </div>
                    </div>
                </div>
                <div className="body-msg">
                    <div className="msg-container">
                        <div>
                        {
                            messages.map(message => {
                                return (
                                    <div key={message.time}>
                                        <button className="msg" data-tip={message.time} data-delay-show='700'>
                                            <p className="content">{message.content}</p>
                                            <small className="author">{message.author}</small><br />
                                        </button>
                                        <ReactTooltip />
                                    </div>
                                )
                            }

                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChatSideBar;