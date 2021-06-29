import React, { createContext,useState } from 'react';

const UserContext = createContext({
    users:[],
    channels:[],
})

export function UserContextProvider(props){
    const[users,setUsers] = useState([])
    const [channels,setChannels]  = useState([])
    
    function AddUsers(user){
        setUsers(user)
    }
    function AllChannels(channel){
        setChannels(channel)
    }
    
    const context = {
        users:users,
        channels:channels,
        AddUsers:AddUsers,
        AllChannels:AllChannels
    }
    

    return <UserContext.Provider value={context}>
        {props.children}
    </UserContext.Provider>
}

export default UserContext;