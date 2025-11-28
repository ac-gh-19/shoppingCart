import Header from "./components/header";
import { useState } from "react";
import { Outlet } from "react-router";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header cartItems={cartItems}></Header>
      <Outlet context={{ cartItems, setCartItems }}></Outlet>
    </>
  );
}

export default App;
