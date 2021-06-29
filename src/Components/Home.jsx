import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import '../Css/Home.css'
import { base } from '../req';
import UserContext from '../store';
import Nav from './Nav';
import Users from './Users';


function Home() {
    const store = useContext(UserContext)
    const users = store.users
    console.log(users,'users from room')

    useEffect(() => {
        axios.get(`${base}/users`).then(data => {
            store.AddUsers(data.data)
        })

    }, [])


    return (
        <div className="home">
            <Nav route={"/chat/"+localStorage.getItem('last_room')} name={'Chat'} ></Nav>
            <div>
                <div className="search">
                    <input type="text" placeholder="Search friends to chat" />
                    <button>Search</button>
                </div>
                <div className="head-line">
                    <div>
                        <p>People who are interested to chat</p>
                        <hr />
                    </div>
                </div>
   
                {
                    users.map((user) => {
                        return (
                            <Users user={user} key={user.id}></Users>
                        )
                            
                        
                    })
                }

            </div>
        </div>
    )
}

export default Home