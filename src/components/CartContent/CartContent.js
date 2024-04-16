import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Navbar from "../navbar/Navbar";

import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
        </>
      ) : (
        <h2 className="cart-message"> Tu carrito está vacío </h2>
      )}
    </>
  );
};


export default CartContent
