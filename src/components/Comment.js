import React from "react";
import CommentsList from "./CommentsList";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm border border-l-black bg-gray-100 p-2 rounded-lg">
      <img
        className="w-12 h-12"
        alt="user-icon"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        {/* {replies?.length && replies.map((reply) => <Comment data={reply} />)} */}
        {replies?.length && <CommentsList commentsList={replies} />}
      </div>
    </div>
  );
};

export default Comment;
