import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

{
  /* Iterate over products and show links */
}
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const getData = () => {
    axios.get("http://localhost:3006/products").then((res) => {
      setProducts(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {products.map((el) => {
          return (
            <Link to={`/products/${el.id}`} className="product">
              <div>
                <img src={el.image} alt="alter" />
                <p>
                  {el.name} {el.price}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
