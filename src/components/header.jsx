import { Link } from "react-router";

export default function Header({ cartItems }) {
  return (
    <header className="p-3 border-b">
      <nav>
        <ul className="flex flex-wrap gap-5 justify-center">
          <li className="border-b border-b-transparent hover:border-white">
            <Link to="/">Home</Link>
          </li>
          |
          <li className="hover:border-b">
            <Link to="shop">Shop</Link>
          </li>
          |
          <li className="hover:border-b">
            <Link to="cart">
              Cart{cartItems.length > 0 && `(${cartItems.length})`}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
