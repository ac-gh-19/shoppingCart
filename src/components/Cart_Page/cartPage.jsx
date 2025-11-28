import { useOutletContext } from "react-router";

export default function CartPage() {

    const {cartItems, setCartItems} = useOutletContext();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);

  function handleRemove(itemId) {
    setCartItems((prev) => prev.filter(item => item.id != itemId));
  }

  function handleUpdate(item, value) {
    setCartItems((prev) => prev.map(i => i.id === item.id ? {...i, amount: value} : i));
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 md:grid-cols-[2fr_1fr]">
      <div>
        <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li
                key={item.id}
                className="flex items-center gap-4 border p-4 rounded-lg shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />

                <div className="flex flex-col flex-1">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-gray-600">${item.price.toFixed(2)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={item.amount}
                    className="border rounded w-16 text-center"
                    onChange={(e) => handleUpdate(item, +e.target.value)}
                  />
                </div>

                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="border p-6 rounded-lg shadow-md h-fit sticky top-20">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        
        <div className="flex justify-between text-lg font-medium mb-6">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 w-full rounded-lg font-semibold transition"
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>
      </div>

    </div>
  );
}
