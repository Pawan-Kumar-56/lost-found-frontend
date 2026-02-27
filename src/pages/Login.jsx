import BASE_URL from "../config";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.text();

      if (data === "Login Successful!") {
        navigate("/");  // Redirect to home page
      } else {
        setMessage(data);
      }

    } catch (error) {
      console.error("Error:", error);
      setMessage("Login Failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Login;