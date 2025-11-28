import shopImage from "../../assets/clothingShop.jpg";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center max-w-2xl m-auto mt-10 gap-5 px-8">
      <h1 className="text-3xl">Welcome to the shop!</h1>
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        numquam laborum voluptate expedita inventore velit doloribus molestiae
        cupiditate itaque. Quo recusandae sunt ratione excepturi dolorum, vel
        quam corporis illo non, quaerat repudiandae quasi molestias fugit
        dolores error libero voluptatibus eum reprehenderit ea tenetur debitis
        magnam quis quibusdam. Culpa, nam consectetur.
      </p>
      <img src={shopImage}></img>
    </div>
  );
}
