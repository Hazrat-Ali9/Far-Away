import "./Items.css";
function Items({ itemsArr, setItemsArr }) {
  return (
        <div style={{height: "80%"}}>
          <div
      id="items"
      className="mt-3 gap-5 d-flex justify-content-center align-items-center"
      style={{
        flexWrap: "wrap",
        width: "75%",
        margin: "0px auto",
      }}
    >
      {itemsArr.map((item, index) => (
        <Item
          key={index}
          item={item}
          itemsArr={itemsArr}
          setItemsArr={setItemsArr}
          number={index}
        />
      ))}
    </div>
    </div>

  );
}

function Item({ item, itemsArr, setItemsArr, number }) {
  console.log(item);
  return (
    <div>
      <input
      className="input"
        type="checkbox"
        onChange={() => {
          let myItems = [...itemsArr];
          myItems[number].packed = !myItems[number].packed;
          setItemsArr(myItems);
          console.log(myItems);
        }}
        checked={item.packed}
        style={{
          textDecoration: item.packed ? "line-through" : "none",
          width: "20px",
        }}
      />

      <label
        style={{
          fontSize: "18px",
          textDecoration: item.packed ? "line-through" : "none",
          textDecorationColor: item.packed ? "red" : "none",
        }}
      >
        {item.quantity} {item.name}
      </label>

    
    </div>
  );
}

export default Items;

// Items jsx
