import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";


const CartElements = () => {
const { cart, setCart } = useContext(dataContext);

  const eliProducto = (id) => {
    const fID = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== fID;
    });

    setCart(newCart);
  };

  return cart.map((product) => {
    return (
        <div className="cartContent" key={(product.id)}> 
            <img src={product.img} alt="product-card" />
            <h3 className="name">{product.name}</h3>
            <h5 className="prince-u">$ {product.price} </h5>
            <CartItemCounter producto={product} quanty={product.quanty} />
            <h4 className="price">$ {product.price * product.quanty} </h4>
            <h6 className="cart-delete-button" onClick={() => eliProducto(product.id)}>❌</h6>
        </div>
    );
  });
};

export default CartElements
