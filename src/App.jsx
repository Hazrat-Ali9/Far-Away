import { useState } from "react";
import "./App.css";
import Logo from "./Components/Logo/Logo.jsx";
import Form from "./Components/Form/Form.jsx";
import PackingList from "./Components/PackingList/PackingList.jsx";
import Stats from "./Components/Stats/Stats.jsx";

function App() {
  const [itemsArr, setItemsArr] = useState([]);

  return (
    <div className="container-fluid">
      <div className="row">
        <Logo />
        <Form itemsArr={itemsArr} setItemsArr={setItemsArr} />
        <PackingList itemsArr={itemsArr} setItemsArr={setItemsArr} />
        <Stats itemsArr={itemsArr} setItemsArr={setItemsArr} />
      </div>
    </div>
  );
}

export default App;
