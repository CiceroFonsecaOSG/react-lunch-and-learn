import React, { useState } from "react";
import AddCustom from "./AddCustom";
import ListCustom from "./ListCustom";

const Customizer = () => {
  const [customs, setCustoms] = useState([]);

  const handleAddCustom = (text) => {
    setCustoms([
      ...customs,
      {
        id: customs[customs.length - 1],
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
};

export default Customizer;
