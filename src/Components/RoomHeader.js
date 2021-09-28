import { observer } from "mobx-react-lite";
import React from "react";

function RoomHeader({ name }) {
  return (
    <div className="flex items-center h-28 text-xl p-2 px-6 border-b-2 border-gray-500">
      <img
        alt="img"
        className="h-14 w-14 rounded-3xl"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      ></img>
      <p className="m-3 mx-7 text-white">{name}</p>
    </div>
  );
}

export default observer(RoomHeader);
