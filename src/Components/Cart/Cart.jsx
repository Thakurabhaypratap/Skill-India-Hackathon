const Cart = ({ cartItems }) => {
  if (!Array.isArray(cartItems)) {
      return <div>Error: Cart items data is not available</div>;
  }

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
      <div>
          <h2>Total: ${total}</h2>
          {/* Render cart items */}
      </div>
  );
};

export default Cart