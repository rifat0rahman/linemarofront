import React from 'react';
import ChatSideBar from './Chat/ChatBody';
import ChatBody from './Chat/ChatSideBar';
import '../Css/Chat.css'
import Nav from './Nav';


function Chat() {

    return (
        <div className="chat">
            <Nav route={'/'} name="Home" to="/"></Nav>
            <div className="container">
            <ChatBody />
            <ChatSideBar/>
            </div>
        </div>
    )
}
export default Chat;