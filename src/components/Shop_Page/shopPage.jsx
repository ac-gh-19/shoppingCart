import getStoreItems from "../../utils/fakestore";
import { useEffect, useState } from "react";
import ShopItem from "./shopItem";
import { useOutletContext } from "react-router";

export default function CartPage() {
  const { cartItems, setCartItems } = useOutletContext();

  const [shopItems, setShopItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(cartItems);

  function handleItem(item, amount) {
    if (amount === 0) return;
    const existing = cartItems.find((i) => i.id === item.id);

    if (existing) {
      setCartItems((prev) =>
        prev.map((i) =>
          i.id === item.id ? { ...i, amount: Number(i.amount) + Number(amount) } : i,
        ),
      );
    } else {
      setCartItems((prev) => [...prev, { ...item, amount: amount }]);
    }
  }

  useEffect(() => {
    async function getItems() {
      const items = await getStoreItems();
      setShopItems(items);
      setIsLoading(false);
    }

    getItems();
  }, []);

  return (
    <div
      className="max-w-6xl m-auto grid px-4 gap-5 mt-10"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
    >
      {isLoading ? (
        <div>Loading</div>
      ) : (
        shopItems &&
        shopItems.map((item) => (
          <ShopItem
            key={item.id}
            item={item}
            handleItem={handleItem}
          ></ShopItem>
        ))
      )}
    </div>
  );
}
