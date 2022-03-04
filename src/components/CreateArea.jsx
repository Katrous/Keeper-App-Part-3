import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    let { value, name } = e.target;
    if (name === "title") {
      setInputText({
        title: value,
        content: ""
      });
    }
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button
          onClick={() => {
            props.onAdd(inputText);
            setInputText("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
