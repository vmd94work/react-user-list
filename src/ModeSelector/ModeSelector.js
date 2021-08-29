import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
  const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "2rem" }}>
      <button
        style={{
          margin: "1rem",
        }}
        onClick={() => props.onSelect(smallUrl)}
        className="btn btn-primary"
      >
        32 Users
      </button>
      <button
        style={{
          margin: "1rem",
        }}
        onClick={() => props.onSelect(bigUrl)}
        className="btn btn-success"
      >
        1000 Users
      </button>
    </div>
  );
};
