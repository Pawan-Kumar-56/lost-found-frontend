import { useState } from "react";
import BASE_URL from "../config";

function PostItem() {

  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "LOST",
    location: "",
    date: "",
    image: null
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("type", form.type);
    formData.append("location", form.location);
    formData.append("date", form.date);
    formData.append("image", form.image);

    try {
      const response = await fetch(
        `${BASE_URL}/items/add/1`,
        {
          method: "POST",
          body: formData
        }
      );

      if (response.ok) {
        setMessage("Item Posted Successfully!");
      } else {
        setMessage("Failed to post item");
      }

    } catch (error) {
      console.error(error);
      setMessage("Error occurred");
    }
  };

  return (
    <div className="form-container">
      <h2>Post Item</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />

        <select name="type" onChange={handleChange}>
          <option value="LOST">Lost</option>
          <option value="FOUND">Found</option>
        </select>

        <input name="location" placeholder="Location" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />

        <input type="file" name="image" onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default PostItem;