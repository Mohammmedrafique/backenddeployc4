import React, { useState } from "react";

function Posts() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    device: "",
    no_of_comments: 0,
    userID: "",
    user: "",
  });

  // Handler to update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://tame-cyan-grasshopper-hat.cyclic.app/posts/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Data added successfully!");
        // Optionally, reset the form fields after successful submission
        setFormData({
          title: "",
          body: "",
          device: "",
          no_of_comments: 0,
          user: "JohnDoe",
        });
      } else {
        console.error("Failed to add data.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea name="body" value={formData.body} onChange={handleChange} />
        </div>
        <div>
          <label>Device:</label>
          <input
            type="text"
            name="device"
            value={formData.device}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>No. of Comments:</label>
          <input
            type="number"
            name="no_of_comments"
            value={formData.no_of_comments}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Posts;
