import React, { useState } from "react";
import { postProduct } from "../config/Api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Form() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    brand: "",
    availability: "",
    image: null,
  });

  const navigate = useNavigate();
  const userToken = useSelector((state) => state.tokenreducer.tokens); // Redux token
  console.log("Token:", userToken);

  // 👇 Single handleChange sab inputs handle karega
  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setForm({
      ...form,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("price", form.price);
      formData.append("brand", form.brand);
      formData.append("availability", form.availability);
      formData.append("image", form.image); // file object
        // 🔍 Debugging ke liye
  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }

      const res = await postProduct( formData);

      if (res) {
        alert("Product posted successfully ✅");
        navigate("/");
      }
    } catch (error) {
      console.error("Error in submit:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-center mb-6">
        Add Your Product
      </h1>

      <form onSubmit={submit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter product title"
            value={form.title}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-lg font-semibold mb-2">Description</label>
          <textarea
            name="description"
            placeholder="Mention key features (e.g. brand, model, age, type)"
            value={form.description}
            onChange={handleChange}
            className="w-full h-24 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Brand */}
        <div>
          <label className="block text-lg font-semibold mb-2">Brand</label>
          <input
            type="text"
            name="brand"
            placeholder="Enter brand name"
            value={form.brand}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-lg font-semibold mb-2">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Set product price"
            value={form.price}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Availability */}
        <div>
          <label className="block text-lg font-semibold mb-2">Availability</label>
          <input
            type="text"
            name="availability"
            placeholder="In Stock / Out of Stock"
            value={form.availability}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Upload Image */}
        <div>
          <label className="block text-lg font-semibold mb-2">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-bold hover:bg-green-700 transition"
          >
            Post Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
