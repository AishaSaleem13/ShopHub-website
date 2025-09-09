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
  try{
    const res=await fetch('https://backend-indol-one-96.vercel.app/user/login',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        email,
        password
    })
})
  if (!res.ok) {
            throw new Error(`Failed to login up: ${res.statusText}`);
        }

        const result = await res.json();
        return result;
    } catch (error) {
        // Handle any errors, you can log them or throw them further
        console.error("Error during login-up:", error);
        throw error; // Rethrow the error for the caller to handle
    }
  }




export async function setSignUp({ email, password, fullname }) {
    try {
        const res = await fetch('https://shophubwebsite-node.vercel.app/user/register', {
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
export const postProduct = async (token, formData) => {
  try {
    const res = await fetch("https://node-js-nhgy.vercel.app/products/post", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // ✅ token here
      },
      body: formData, // ✅ FormData includes image
    });

    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error in postProduct:", error);
    throw error;
  }
};

