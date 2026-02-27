import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Lost & Found - NIT KKR</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/items">View Items</Link>
        <Link to="/post">Post Item</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;