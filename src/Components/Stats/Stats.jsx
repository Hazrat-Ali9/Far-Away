export default function Stats({ itemsArr, setItemsArr }) {
  return (
    <div
      style={{
        backgroundColor: "#67c2a3",
        textAlign: "center",
        lineHeight: "2 !important",

        padding: "15px",
      }}
    >
      <h4 className="p-0 m-0">
        You have {itemsArr.length} Items on your list,and you packed { itemsArr.filter((item) => item.packed).length} items!
      </h4>
    </div>
  );
}

// Stars