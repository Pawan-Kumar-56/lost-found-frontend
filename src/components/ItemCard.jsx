function ItemCard({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p><strong>Contact:</strong> {item.contact}</p>
    </div>
  );
}

export default ItemCard;