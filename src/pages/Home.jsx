import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>NIT Kurukshetra Lost & Found Portal</h1>
      <p>Helping students reconnect with their lost belongings.</p>

      <div className="home-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
        <Link to="/items" className="btn">View Items</Link>
        <Link to="/post" className="btn">Post Item</Link>
      </div>
    </div>
  );
}

export default Home;