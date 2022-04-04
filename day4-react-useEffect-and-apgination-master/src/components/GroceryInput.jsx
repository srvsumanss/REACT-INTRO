import React, { useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

const GroceryInput = ({ addData }) => {
  const [text, settext] = useState("second");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          settext(e.target.value);
        }}
      />
      <button
        onClick={() => {
          axios
            .post("http://localhost:3002/items", {
              title: text,
              key: nanoid(),
            })
            .then(() => {
              addData();
            });
        }}
      >
        Add
      </button>
    </div>
  );
};

export default GroceryInput;
