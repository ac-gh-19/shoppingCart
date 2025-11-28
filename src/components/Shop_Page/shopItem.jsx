import { useState } from "react";

export default function ShopItem({ item, handleItem }) {
  const [amount, setAmount] = useState(0);

  function handleInputChange(e) {
    setAmount(e.target.value);
  }

  return (
    <div
      key={item.id}
      className="p-4 border rounded-lg shadow-lg flex flex-col"
      data-iditem={item}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-lg font-semibold truncate-text">{item.title}</h3>
      <div className="flex justify-between items-center mt-auto pt-4">
        <span className="text-xl font-bold">${item.price}</span>
        <span className="text-sm text-yellow-500">{item.rating.rate} ★</span>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <input
          type="number"
          placeholder={0}
          min="0"
          className="w-16 p-1 border rounded text-center"
          style={{ flexGrow: 1 }}
          value={amount}
          onChange={(e) => handleInputChange(e)}
        />
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          onClick={() => {
            handleItem(item, amount);
            setAmount(0);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
