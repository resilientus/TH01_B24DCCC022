import React, { useState } from "react";

function ProductItem({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        width: "1270px",
        margin: "10px",
        marginLeft: "35px"
      }}
    >
      <p style={{ fontWeight: "bold" }}>{product.name}</p>
      <p>Giá: {product.price}đ</p>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
    </div>
  );
}

function CartApp() {
  const products = [
    { id: 1, name: "sản phẩm A", price: 100 },
    { id: 2, name: "sản phẩm B", price: 200 },
    { id: 3, name: "sản phẩm C", price: 300 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div>
      <h3>
        Giỏ hàng: {totalItems} sản phẩm, tổng tiền: {totalPrice}
      </h3>

      <div style={{}}>
        {products.map((p) => (
          <ProductItem key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default CartApp;
