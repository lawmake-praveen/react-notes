import React from "react";
import { MdDelete } from "react-icons/md";

const AllPosts = ({ posts, handleDelete, setShowDeleteMsg }) => {
  if (posts.length === 0) {
    return (
      <div className="no-posts">
        <h2>There are no Notes here!</h2>
        <p>Start Write Something.</p>
      </div>
    );
  }

  return (
    <div className="all-posts">
      {posts.map((item, index) => {
        return (
          <div className="post" key={index}>
            <div className="post-head">
              <h2 className="title-text">{item.title}</h2>
              <button className="del-btn" onClick={() => handleDelete(index)}>
                <MdDelete />
              </button>
            </div>
            <div className="notes-text">{item.notes}</div>
          </div>
        );
      })}
      <div className="clear-all-div">
        <button
          className="clear-all-btn"
          onClick={() => setShowDeleteMsg(true)}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default AllPosts;