import data from "../data";

import { Link } from "react-router-dom";
function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            {/* use key to fix error each child has unique key */}
            <Link to={`/product/${product.slug}`}>
              {/* use the {} to dynamic, the `` to get object property */}
              <img src={product.image} alt={product.name}></img>
            </Link>
            <div className="product-info">
              <Link to={"/product/" + product.slug}>
                <p>{product.name}</p>
              </Link>

              <p>
                <strong>$</strong>
                {product.price}
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;