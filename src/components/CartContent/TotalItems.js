import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const TotalItems = () => {
    const { cart } = useContext(dataContext);

    const itemsQ = cart.reduce((acc, ele) => acc + ele.quanty, 0);
  return <span className="cart-items">{itemsQ}</span>
}

export default TotalItems
