import axios from 'axios'
import React from 'react'
import { base } from '../req'

function Users({ user }) {
    const author = localStorage.getItem('author')
    function createRoom(){
        const context = {
            'name':  author.slice(0,-10)+user.email.slice(0,-10),
            'author1':author.slice(0,-10),
            'author2':user.email.slice(0,-10)
        }

        axios.post(`${base}/rooms/`,context).then(data=>{
            window.location.replace(`chat/${data.data}`)
            console.log(data)
        })

    }
    return (
        <div>
            <div className="friends">
                <div>
                    <div className="user-card">
                        <img 
                        src={"https://ui-avatars.com/api/?background=random&name="+user.first_name+'+'+user.last_name} 
                        alt="avater" />
                        <a href="#" className="user">{user.email.slice(0,-10)}</a>
                        <a href="#" onClick={createRoom} className="chat-button">Start Chat</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users

