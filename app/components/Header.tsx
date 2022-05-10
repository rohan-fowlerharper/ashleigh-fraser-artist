import Title from "./Title";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header>
        <Title />
      </header>
      <div className="sticky top-0 z-20 bg-white shadow-md md:shadow-lg md:shadow-zinc-400">
        <Nav />
      </div>
    </>
  );
}
