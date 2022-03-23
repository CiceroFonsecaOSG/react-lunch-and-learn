import { useState } from "react";

const CustomItem = ({ custom, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let customItemContent;

  if (isEditing) {
    customItemContent = (
      <>
        <input
          value={custom.text}
          onChange={(e) => {
            onChange({ ...custom, text: e.target.value });
          }}
        />
        <button className="btn" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    customItemContent = (
      <>
        {custom.text}
        <button className="btn" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={custom.done}
        onChange={(e) => {
          onChange({
            ...custom,
            done: e.target.checked,
          });
        }}
      />
      <span>{customItemContent}</span>
      <button className="btn delete" onClick={() => onDelete(custom.id)}>
        Delete
      </button>
    </label>
  );
};

export default CustomItem;
