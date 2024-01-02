import React, { useState, useReducer, useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "storeinp":
      return [...state, { id: state.length, val: action.val, toggle: false }];
    case "toggle":
      const newstate = state.map((item) => {
        if (item.id === action.ind) {
          return { ...item, toggle: !item.toggle };
        } else {
          return item;
        }
        });
    return newstate;
    default:
      return state;
  }
}

function Use() {
  const [items, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");
  const inpref = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      dispatch({ type: "storeinp", val: inputValue });
      setInputValue("");
    }
  };

  const toggle = (id) => {
    dispatch({ type: "toggle", ind: id });

    setInputValue("");
  };

//   function focus1() {
//     inpref.current.focus();
//   }

  return (
    <>
      <input placeholder="Type something here"
        type="text"
        className="inputbox"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e)}
        ref={inpref}
      />
      <div className="main">
        {items.map((item) => (
          <div key={item.id} className="searched_item">
            <h2>{item.toggle ? " The content is hidden" : item.val}</h2>
            <button onClick={() => toggle(item.id)}>Toggle</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Use;