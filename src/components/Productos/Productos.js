import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";

import "./Productos.css";

const Productos = () => {
  const [data, setData] = useState ([]);
  const { buyProducts } = useContext(dataContext);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
}, []);


  return data.map((product)=> {
    return(
        <div className="card" key={product.id}>
            <img src={product.img} alt="img-pronduct-card" />
            <h3>{product.name}</h3>
            <h4>$ {product.price} MXN</h4>
            <button onClick={() => buyProducts(product)}>Agregar al carrito</button>
        </div>
    );
  });
};

export default Productos
