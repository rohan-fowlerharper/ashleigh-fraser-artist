import Title from "./Title";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header>
        <Title />
      </header>
      <div className="sticky top-0 z-20 bg-white shadow-md  shadow-zinc-700/50 md:shadow-lg md:shadow-zinc-700/50">
        <Nav />
      </div>
    </>
  );
}
