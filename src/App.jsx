import React, { useState, useEffect } from "react";
import NewPostBtn from "./components/NewPostBtn";
import FormContainer from "./components/FormContainer";
import AllPosts from "./components/AllPosts";
import DelMsgContainer from "./components/DelMsgContainer";

function App() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [showNewPost, setShowNewPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [showDeleteMsg, setShowDeleteMsg] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes"));

    if (savedNotes) {
      setPosts(savedNotes);
    }
  }, []);

  const formTouch = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOne = {
      title: title,
      notes: notes.replace(/\n+$/, ""),
    };
    posts.push(newOne);
    localStorage.setItem("react-notes", JSON.stringify(posts));

    setShowNewPost(false);
    setTitle("");
    setNotes("");
  };

  const handleCancel = () => {
    setTitle("");
    setNotes("");
    setShowNewPost(false);
  };

  const handleDelete = (delIndex) => {
    const updatedData = posts.filter((item, index) => index !== delIndex);
    localStorage.setItem("react-notes", JSON.stringify(updatedData));
    setPosts(updatedData);
  };

  const clearAll = () => {
    setPosts([]);
    localStorage.removeItem("react-notes");
    setShowDeleteMsg(false);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>React Notes</h1>
      </div>

      <NewPostBtn onClick={() => setShowNewPost(true)} />

      {showNewPost && (
        <FormContainer
          title={title}
          setTitle={setTitle}
          notes={notes}
          setNotes={setNotes}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          formTouch={formTouch}
          setShowNewPost={setShowNewPost}
        />
      )}

      {showDeleteMsg && (
        <DelMsgContainer
          clearAll={clearAll}
          setShowDeleteMsg={setShowDeleteMsg}
        />
      )}

      <AllPosts
        posts={posts}
        handleDelete={handleDelete}
        setShowDeleteMsg={setShowDeleteMsg}
      />
      <a href="https://www.free-counters.org/">
        free Counters on Free-Counters.org
      </a>{" "}
      <script
        type="text/javascript"
        src="https://www.freevisitorcounters.com/auth.php?id=44889294efc8c783be1bbdbcda84665f9bc84395"
      ></script>
      <script
        type="text/javascript"
        src="https://www.freevisitorcounters.com/en/home/counter/1053482/t/1"
      ></script>
    </div>
  );
}

export default App;
