import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center w-[100%] shadow-sm mb-2">
      <img
        alt="user-img"
        className="h-12"
        src="https://yt4.ggpht.com/ytc/AIf8zZTp-QtIV0AV1F8onDoO1496oyAXYSV76_Lm=s64-c-k-c0x00ffffff-no-rj"
      />
      <div className="flex-col justify-center text-start  ">
        <h2 className="font-bold px-2 text-start">{name}</h2>
        <h2 className="px-2 text-start">{message}</h2>
      </div>
    </div>
  );
};

export default ChatMessage;
