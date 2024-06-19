import Items from "../Items/Items.jsx";
import "./PackingList.css";
function PackingList({ itemsArr, setItemsArr }) {
  return (
    <div
      className="col-12"
      style={{
        height: "66.1vh",
        backgroundColor: "#4b3422",
        color: "white",
      }}
    >
      <Items itemsArr={itemsArr} setItemsArr={setItemsArr} />

      <ButtomButtons itemsArr={itemsArr} setItemsArr={setItemsArr} />
    </div>
  );
}

export default PackingList;

function ButtomButtons( { itemsArr, setItemsArr } ) {

  return (
    <div className="d-flex justify-content-center align-items-center gap-5 p-4" style={{
      marginTop: "auto 0 !important",
    }}>
      <button id="clearBtn" onClick={() => setItemsArr([])}>Clear</button>
      {/* <button id="saveBtn">Save</button> */}
    </div>
  );
}
