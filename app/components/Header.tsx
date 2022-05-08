import Title from "./Title";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="mb-6 shadow-md shadow-zinc-200 md:shadow-lg">
      <Title />
      <Nav />
    </header>
  );
}
