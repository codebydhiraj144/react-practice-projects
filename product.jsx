function Price({ oldPrice, newPrice }) {
  return (
    <div>
      <span style={{ textDecoration: "line-through" }}>
        ₹{oldPrice}
      </span>
      &nbsp;&nbsp;
      <span style={{ fontWeight: "bold" }}>
        ₹{newPrice}
      </span>
    </div>
  );
}

export default Price;
