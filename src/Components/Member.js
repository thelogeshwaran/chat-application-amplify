import { observer } from "mobx-react-lite";
import React from "react";
import { useMessageProvider } from "../Context/MessagesProvider";

function Member({ member }) {
  const { createConversation } = useMessageProvider();
  return (
    <div
      className="flex justify-center  min-h-1/10 text-xl"
      onClick={() => createConversation(member)}
    >
     <div className="bg-chatPurpleDark flex items-center w-11/12 p-4 rounded-xl my-3 cursor-pointer hover:bg-chatBlue">
     <img
        alt="img"
        className="h-14 w-14 rounded-3xl"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      ></img>
      <p className="m-3 mx-4">{member.username}</p>
     </div>
    </div>
  );
}

export default observer(Member);
