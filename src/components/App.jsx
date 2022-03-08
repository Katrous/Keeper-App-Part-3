import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItems(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItems(id) {
    setItems((prevItems) => {
      return prevItems.filter((noteItems, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItems} />
      {items.map((noteItems, index) => (
        <Note
          key={index}
          id={index}
          title={noteItems.title}
          content={noteItems.content}
          onDelete={deleteItems}
        />
      ))}
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
