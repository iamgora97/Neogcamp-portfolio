import "./styles.css";
import { useState } from "react";

const bookDB = {
  Ravinder_Singh: [
    { name: "I Too Had a Love Story", rating: "5/5" },
    { name: "Can love happen twice? ", rating: "4.5/5" },
    { name: "Like it Happened Yesterday ", rating: "4.3/5" }
  ],

  JK_Rowling: [
    { name: "Harry Potter and the Chamber of secrets", rating: "5/5" },
    { name: "Harry Potter and the Sorcerer's Stone", rating: "4.8/5" },
    { name: "Harry Potter and the Half-Blood Prince", rating: "4.7/5" }
  ],
  Chetan_Bhagat: [
    {name: "Five Point Someone", rating: "4.5/5"},
    { name: "2 States: The Story of My Marriage", rating: "4.3/5" },
    { name: "The 3 Mistakes of My Life", rating: "4.0/5" },
  ]
};

export default function App() {
  const [selectedAuthor, setAuthor] = useState("Ravinder_Singh");

  function authorClickHandler(author) {
    setAuthor(author);
  }

  //view
  return (
    <div className="App">
      <h1>Book Recommendation App</h1>
      <p>Checkout my favorite books. Select a author to get started</p>

      <div>
        {Object.keys(bookDB).map((author) => (
          <button
            key={author}
            onClick={() => authorClickHandler(author)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {author}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedAuthor].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "auto",
                marginBottom: "1rem",
                borderRadius: "0.5rem",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
