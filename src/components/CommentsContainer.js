import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Vinayak",
    text: "ljdajfbndsjfcnbsdjk cjsdbjkdsbckjsdbc",
    replies: [
      {
        name: "Rahul",
        text: "ljdajfbndsjfcnbsdjk cjsdbjkdsbckjsdbc",
        replies: [],
      },
      {
        name: "Rahul",
        text: "ljdajfbndsjfcnbsdjk cjsdbjkdsbckjsdbc",
        replies: [
          {
            name: "Rohit",
            text: "ljdajfbndsjfcnbsdjk cjsdbjkdsbckjsdbc",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Vinayak",
    text: "ljdajfbndsjfcnbsdjk cjsdbjkdsbckjsdbc",
    replies: [
      {
        name: "Rahul",
        text: "ljdajfbndsjfcnbsdjk cjsdbjkdsbckjsdbc",
        replies: [],
      },
      {
        name: "Rahul",
        text: "ljdajfbndsjfcnbsdjk cjsdbjkdsbckjsdbc",
        replies: [
          {
            name: "Rohit",
            text: "ljdajfbndsjfcnbsdjk cjsdbjkdsbckjsdbc",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      {/* {commentsData.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))} */}
      <CommentsList commentsList={commentsData} />
    </div>
  );
};

export default CommentsContainer;
