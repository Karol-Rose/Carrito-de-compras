import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ producto }) => {
  const { cart, setCart, buyProducts } = useContext(dataContext);

  const restar = () => {
    const productr = cart.find((item) => item.id === producto.id);

    productr.quanty !== 1 && setCart(cart.map((item) => (item.id === producto.id ? {...producto, quanty: 
    productr.quanty - 1} : item)));
  }

  return (
    <>
    <p className="counter-button" onClick={restar}> - </p>
    <p> {producto.quanty} </p>
    <p className="counter-button" onClick={() => buyProducts(producto)}> +  </p>
    </>
  );
};

export default CartItemCounter
