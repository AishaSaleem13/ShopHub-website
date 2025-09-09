import React, { useState } from 'react'
import { postProduct } from '../config/Api'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Form() {
  const [title, setTitle] = useState("")
  const [brand, setBrand] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()
  const [availability, setavailability] = useState("")
  const [price, setPrice] = useState("")

  const navigate = useNavigate()
  const userToken = useSelector(state => state.tokenreducer.tokens) // Redux token
  console.log("Token:", userToken);



const submit = async () => {
  try {
    if (!title || !description || !brand || !price || !availability) {
      alert("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("brand", brand);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("availability", availability);

    if (image) {
      formData.append("image", image);
    }

    const res = await postProduct(userToken, formData);

    if (res) {
      alert("Product posted successfully");
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

      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter product title"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-lg font-semibold mb-2">Description</label>
          <textarea
            placeholder="Mention key features (e.g. brand, model, age, type)"
            className="w-full h-24 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Brand */}
        <div>
          <label className="block text-lg font-semibold mb-2">Brand</label>
          <input
            type="text"
            placeholder="Enter brand name"
            onChange={(e) => setBrand(e.target.value)}
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-lg font-semibold mb-2">Price</label>
          <input
            type="number"
            placeholder="Set product price"
            onChange={(e) => setPrice(e.target.value)}
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Availability */}
        <div>
          <label className="block text-lg font-semibold mb-2">Availability</label>
          <input
            type="text"
            placeholder="In Stock / Out of Stock"
            onChange={(e) => setavailability(e.target.value)}
            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Upload Image */}
        <div>
          <label className="block text-lg font-semibold mb-2">Upload Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            onClick={submit}
            className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-bold hover:bg-green-700 transition"
          >
            Post Now
          </button>
        </div>
      </div>
    </div>
  )
}


export default Form
