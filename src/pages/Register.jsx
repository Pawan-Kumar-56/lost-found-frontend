import { useState } from "react";
import BASE_URL from "../config";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.text();
      setMessage(data);

    } catch (error) {
      console.error("Error:", error);
      setMessage("Registration Failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
       
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Register;