import React, { useReducer } from "react";
import { customsReducer } from "./customizerReducer";
import AddCustom from "./AddCustom";
import ListCustom from "./ListCustom";

export default function Customizer() {
  const [customs, dispatch] = useReducer(customsReducer, initialCustoms);

  const handleAddCustom = (text) => {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
      reviewed: false,
    });
  };

  const handleChangeCustom = (custom) => {
    dispatch({
      type: "changed",
      custom: custom,
    });
  };

  const handleDeleteCustom = (customId) => {
    dispatch({
      type: "deleted",
      id: customId,
    });
  };

  return (
    <>
      <h1>Customize your course</h1>
      <AddCustom onAddCustom={handleAddCustom} />
      <ListCustom
        customs={customs}
        onChangeCustom={handleChangeCustom}
        onDeleteCustom={handleDeleteCustom}
      />
    </>
  );
}

let nextId = 3;
const initialCustoms = [
  { id: 0, text: "Replace logos and colors", reviewed: true },
  { id: 1, text: "Extend course duration", reviewed: false },
];
