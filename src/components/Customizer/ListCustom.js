import React from "react";
import ErrorBoundary from "../../ErrorBoundary";
import CustomItem from "./CustomItem";

const ListCustom = ({ customs, onChangeCustom, onDeleteCustom }) => {
  return (
    <ul>
      {customs.map((custom) => (
        <li key={custom.id}>
          <CustomItem
            custom={custom}
            onChange={onChangeCustom}
            onDelete={onDeleteCustom}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListCustom;
