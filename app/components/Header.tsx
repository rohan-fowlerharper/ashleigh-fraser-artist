import Title from "./Title";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="mb-6 shadow-md shadow-zinc-200">
      <Title />
      <Nav />
    </div>
  );
}
