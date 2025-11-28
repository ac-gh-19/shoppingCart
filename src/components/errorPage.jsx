import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <h1>
      ERROR 404
      <button>
        <Link to="/">Return to Home</Link>
      </button>
    </h1>
  );
}
