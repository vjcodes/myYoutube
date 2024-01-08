import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateUniqueId, generateUniqueMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatContainerRef = useRef();

  const chatMesssages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addMessage(generateUniqueMessage()));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Scroll to the bottom when messages change
    scrollToBottom();
  }, [chatMesssages]);

  const scrollToBottom = () => {
    // Using `current` to access the DOM element
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        id: generateUniqueId(),
        name: "Rahul Jaiswal",
        message: liveMessage,
      })
    );
    setLiveMessage("")
  };

  return (
    <div>
      <div
        ref={chatContainerRef}
        className="flex flex-col-reverse h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll "
      >
        {chatMesssages.map((msg) => (
          <ChatMessage key={msg.id} name={msg.name} message={msg.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => handleSendMessage(e)}
        className="w-full ml-2 p-2 mt-2 border border-black"
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="px-2 py-2 w-80 border"
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
