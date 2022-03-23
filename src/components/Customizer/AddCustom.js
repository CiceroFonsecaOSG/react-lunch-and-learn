import { useState } from "react";

export default function AddCustom({ onAddCustom }) {
  const [text, setText] = useState("");

  return (
    <div className="add-custom">
      <input
        placeholder="Add Custom"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          setText("");
          onAddCustom(text);
        }}
      >
        Add
      </button>
    </div>
  );
}
