import { useEffect, useState } from "react";
import "./Form.css";

function Form({ itemsArr, setItemsArr }) {
  // quantity and item name states
  const [quantity, setQuantity] = useState(1);
  const [itemName, setitemName] = useState("");

  // add item function
  const addItem = () => {
    let myItems = [...itemsArr];
    myItems.push({
      quantity: quantity,
      name: itemName,
      packed: false,
    });
    console.log(myItems);
    setItemsArr(myItems);
  };

  // return
  return (
    <div
      className="col-12 d-md-flex justify-content-around align-items-center"
      style={{
        backgroundColor: "#e06b1b",
        padding: "12px 0",
      }}
    >
      <h3
        id="text"
        className="mb-3 mb-md-0"
        style={{
          textAlign: "center",
          padding: "0",
          margin: "0",
          fontFamily: "cursive",
        }}
      >
        What do you need for your 😍 trip?
      </h3>

      <div className="d-flex justify-content-center align-items-center gap-3">

        {/* input fields */}
        <input
          type="number"
          id="numberInput"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="text"
          id="itemInput"
          onChange={(e) => setitemName(e.target.value)}
        />

        {/* add button */}
        <button id="addBtn" onClick={() => addItem()}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Form;

// From 