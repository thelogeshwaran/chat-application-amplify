import React from 'react'
import { useMessageProvider } from '../Context/MessagesProvider'

function RoomHeader() {
    const { room } = useMessageProvider();
    return (
        <div className="flex items-center h-28 bg-chatLightGray text-2xl p-2">
            <img
        className="h-20 w-20 rounded-full"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      ></img>
      <p className="m-3 mx-5">{room.name}</p>
        </div>
    )
}

export default RoomHeader
