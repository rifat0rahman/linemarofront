import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../Css/ChatSideBar.css'
import { base } from '../../req';
import UserContext from '../../store';


function ChatBody() {
    const author = localStorage.getItem('author').slice(0, -10)
    const Store = useContext(UserContext)
    const channels = Store.channels
    localStorage.setItem('last_room',channels?.slice(-1).pop()?.name)

    useEffect(() => {
        axios.get(`${base}/rooms/`).then(data => {
            const channel = []
            for (let key in data.data) {
                if (data.data[key].author1 === author || data.data[key].author2 === author) {
                    var info = {
                        'name': data.data[key].name,
                        'receiver': data.data[key].name.replace(author, '')
                    }
                    channel.push(info)
                }
            }
            console.log(channel)
            Store.AllChannels(channel)
                
            
        })
    }, [])


    return (
        <div className="sidebar">
            <div className="after-Search">
                <div className="conv">
                    <p>All Conversations</p>
                    <hr />
                </div>
                {
                    channels?.map(channel => {
                        return (
                            <div className="chat-card" key={channel.name}>
                                <img src={"https://ui-avatars.com/api/?background=random&name=" + channel.receiver} alt="avater" />
                                <Link to={`/chat/${channel.name}`} className="user">{channel.receiver.slice(0,14)}</Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default ChatBody;