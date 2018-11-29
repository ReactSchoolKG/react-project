import React from "react";

const Field = ({ numbers, handleChangePosition, fieldPosition }) => {
  return (
    <React.Fragment>
      <ul>
        {numbers.map(item => {
          return (
            <li key={item} onClick={handleChangePosition(fieldPosition)}>
              {item}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Field;
