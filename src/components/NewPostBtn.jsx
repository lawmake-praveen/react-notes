import React from "react";
import { HiPencilAlt } from "react-icons/hi";

const NewPostBtn = ({ onClick }) => {
  return (
    <button className="new-post-btn" onClick={onClick} title="Create Notes">
      <HiPencilAlt className="pencil-icon" />
    </button>
  );
};

export default NewPostBtn;
