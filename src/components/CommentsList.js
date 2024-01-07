import React from "react";
import Comment from "./Comment";

const CommentsList = ({ commentsList }) => {
  return (
    <div>
      {commentsList.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
