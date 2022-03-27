import React, { useState } from "react";
import AddCustom from "./AddCustom";
import ListCustom from "./ListCustom";

export default function Customizer() {
  const [customs, setCustoms] = useState(initialCustoms);

  const handleAddCustom = (text) => {
    setCustoms([
      ...customs,
      {
        id: nextId++,
        text: text,
        reviewed: false,
      },
    ]);
  };

  const handleChangeCustom = (custom) => {
    setCustoms(
      customs.map((c) => {
        if (c.id === custom.id) {
          return custom;
        } else {
          return c;
        }
      })
    );
  };

  const handleDeleteCustom = (customId) => {
    setCustoms(customs.filter((custom) => custom.id !== customId));
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
