export async function getProductById(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return null;
  }
}

export async function getFurnitureProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products/category/furniture');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching furniture products:', error);
    return { products: [] };
  }
}


export async function setLogin({email,password}){
    const res=await fetch('https://dashboard-flax-two.vercel.app/api/auth/login',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        email,
        password
    })
})
const result = await res.json()
    return result
}



export async function setSignUp({ email, password, fullname }) {
    try {
        const res = await fetch('https://node-js-dg9t.vercel.app/login/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                fullname
            })
        });

        if (!res.ok) {
            throw new Error(`Failed to sign up: ${res.statusText}`);
        }

        const result = await res.json();
        return result;
    } catch (error) {
        // Handle any errors, you can log them or throw them further
        console.error("Error during sign-up:", error);
        throw error; // Rethrow the error for the caller to handle
    }}
export async function postProduct(userToken, postData) {
  const formData = new FormData();
  formData.append("title", postData.title);
  formData.append("price", postData.price);
  formData.append("description", postData.description);
  formData.append("availibility", postData.availibility);
  formData.append("brand", postData.brand);
  formData.append("image", postData.image); // file object directly

  const response = await fetch("https://node-js-dg9t.vercel.app/products/product", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${userToken}`, // agar auth required hai
    },
    body: formData
  });

  const result = await response.json();
  return result;
}
