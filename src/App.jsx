import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostItem from "./pages/PostItem";
import ViewItems from "./pages/ViewItems";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<PostItem />} />
        <Route path="/items" element={<ViewItems />} />
      </Routes>
    </>
  );
}

export default App;