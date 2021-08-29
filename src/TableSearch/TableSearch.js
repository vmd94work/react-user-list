import React, { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [value, setValue] = useState("");

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-group mb-3 mt-3">
      <div className="input-group-prepend">
        <button
          onClick={() => props.onSearch(value)}
          className="btn btn-outline-secondary"
        >
          Search
        </button>
      </div>
      <input
        type="text"
        onChange={valueChangeHandler}
        className="form-control"
        value={value}
      />
    </div>
  );
};
