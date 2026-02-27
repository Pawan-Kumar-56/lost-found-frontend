import { useState, useEffect } from "react";
import BASE_URL from "../config";

function ViewItems() {

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch all items from backend
  useEffect(() => {
    fetch(`${BASE_URL}/items/all`)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("Error fetching items:", err));
  }, []);

  // Search filter
  const filteredItems = items.filter(item =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="items-page">
      <h2>All Items</h2>

      <input 
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px", padding: "8px", width: "250px" }}
      />

      <div className="grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className="item-card"
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px"
            }}
          >
            {item.imagePath && (
              <img
                src={`${BASE_URL}/${item.imagePath}`}
                alt="item"
                style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "5px" }}
              />
            )}

            <h3 style={{ marginTop: "10px" }}>{item.title}</h3>

            <p>{item.description}</p>

            <p><strong>Type:</strong> {item.type}</p>

            <p><strong>Location:</strong> {item.location}</p>

            <p><strong>Date:</strong> {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewItems;