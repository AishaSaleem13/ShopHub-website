import React, { useState } from "react";
import { postProduct } from "../config/Api"; // import function
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function ProductForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    availability: "",
    image: null,
    brand:""
  });
  //  const userToken = useSelector(state=>state.tokenreducer.tokens)
    //  console.log("Token:", userToken);
    
 const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("price", form.price);
    formData.append("availability", form.availability);
    formData.append("image", form.image);
    formData.append("brand", form.brand);

    const result = await postProduct(formData); // ✅ use API function
   
    console.log("Product added:", result);
      // console.log(userToken)
      navigate("/");

    if (result.message === "✅ Product added") {
      alert("Product uploaded successfully!");
    } else {
      alert("Upload failed: " + result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} />
       <input type="text" name="brand" placeholder="brand" onChange={handleChange} />
      <input type="text" name="availability" placeholder="availability" onChange={handleChange} />
      <input type="file" name="image" accept="image/*" onChange={handleChange} />
      <button type="submit" className="bg-blue-500 text-white p-2">Upload</button>
    </form>
  );
}

export default ProductForm;
