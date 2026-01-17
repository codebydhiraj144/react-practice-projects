function Price({ oldPrice, newPrice }) {
  return (
    <div>
      {/* Old price is cut */}
      <span style={{ textDecoration: "line-through" }}>
        ₹{oldPrice}
      </span>
      
      &nbsp;&nbsp;&nbsp;

      {/* New price stays normal */}
      <span>
        ₹{newPrice}
      </span>
    </div>
  );
}

export default Price;
