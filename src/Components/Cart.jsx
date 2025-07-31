import { useSelector,useDispatch } from "react-redux";
import { deletefromcart } from "../Store/cart";
function Cart() {
  const sellector = useSelector((state) => state.ReducerOne);
const dispatch =useDispatch()
  if (sellector.length === 0) {
    return <p className="text-gray-500 p-4">Your cart is empty.</p>;
  } else {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {sellector.map((item,index) => (
          <div key={item.id} className="mb-4 p-4 border rounded">
            <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover" />
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p>${item.price}</p>
            <button  className="bg-amber-900 px-2 text-white justify-end"  onClick={()=>dispatch(deletefromcart({index}))}>delete</button>
          </div>
        ))}
      </div>
    );
  }
}
export default Cart