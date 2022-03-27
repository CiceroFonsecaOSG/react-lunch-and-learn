import React, { useReducer } from "react";
import { customsReducer } from "./customizerReducer";
import AddCustom from "./AddCustom";
import ListCustom from "./ListCustom";

export default function Customizer() {
  const [customs, dispatch] = useReducer(customsReducer, []);

  const handleAddCustom = (text) => {
    dispatch({
      type: "added",
      id: customs[customs.length + 1],
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
