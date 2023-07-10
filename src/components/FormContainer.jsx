import React from "react";
import { motion } from "framer-motion";

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
        <motion.form
          className="form"
          onSubmit={handleSubmit}
          onClick={formTouch}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1>New Post</h1>
          <motion.input
            autoFocus
            type="text"
            className="title"
            placeholder="Title * (25 Characters Max)"
            maxLength={25}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          />
          <motion.textarea
            cols="30"
            rows="10"
            placeholder="Notes *"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            required
            initial={{ opacity: 0, y: 20}}
            animate={{ opacity: 1, y: 0}}
          ></motion.textarea>
          <div className="button-area">
            <motion.button type="submit" className="submit-btn"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
            >
              Submit
            </motion.button>
            <motion.button type="button" className="cancel-btn" onClick={handleCancel}
              initial={{ y: 20 }}
              animate={{ y: 0 }}>
              Cancel
            </motion.button>
          </div>
        </motion.form>
    </div>
  );
};

export default FormContainer;
