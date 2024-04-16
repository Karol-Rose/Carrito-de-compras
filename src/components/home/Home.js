import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import Productos from "../Productos/Productos";

const Home = () => {
    return (
       <>
          <Navbar />
          <Banner />
          <div className="product-card-container">
                <Productos />
          </div>
       </>
    );
};

export default Home;