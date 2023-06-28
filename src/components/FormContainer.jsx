import React from "react";

const FormContainer = ({
  title,
  setTitle,
  notes,
  setNotes,
  handleSubmit,
  handleCancel,
  formTouch,
  setShowNewPost,
}) => {
  return (
    <div className="form-container" onClick={() => setShowNewPost(false)}>
      <form className="form" onSubmit={handleSubmit} onClick={formTouch}>
        <h1>New Post</h1>
        <input 
          autoFocus
          type="text"
          className="title"
          placeholder="Title * (25 Characters Max)"
          maxLength={25}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Notes *"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          required
        ></textarea>
        <div className="button-area">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
