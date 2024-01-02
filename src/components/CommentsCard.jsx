import React from "react";
import { FaThumbsUp } from "react-icons/fa";

function CommentsCard({ avatar, username, comment, timestamp, likes }) {
  return (
    <div className="bg-black text-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={`${username}'s avatar`}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{username}</p>
          <p className="text-gray-300 text-sm">{timestamp}</p>
        </div>
      </div>

      <p className="text-gray-400">{comment}</p>
      <button
        className={`flex items-center text-gray-300 focus:outline-none mt-4
        `}
      >
        <FaThumbsUp className="mr-3" />
        <span>{likes} likes</span>
      </button>
    </div>
  );
}

export default CommentsCard;
