import React from "react";

const DelMsgContainer = ({ clearAll, setShowDeleteMsg }) => {
  return (
    <div className="del-msg-container">
      <div className="del-msg">
        <h1>Warning!</h1>
        <p>This action will delete all Notes!</p>
        <div className="del-btn-div-box">
          <button className="confirm-del" onClick={clearAll}>
            Confirm
          </button>
          <button className="cancel-del" onClick={() => setShowDeleteMsg(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DelMsgContainer;
