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