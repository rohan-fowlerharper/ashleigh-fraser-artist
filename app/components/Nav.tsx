import { NavLink } from "remix";

export default function Nav() {
  const links = [
    { label: "Home", link: "home" },
    { label: "About", link: "/#about" },
    { label: "Gallery", link: "gallery" },
    { label: "Commissions", link: "commissions" },
    { label: "Prices", link: "prices" },
    { label: "Contact", link: "/#contact" },
  ];

  return (
    <nav className="pb-6">
      <ul className="flex justify-center gap-8">
        {links.map((link) => (
          <li key={link.label}>
            <button className="rounded-none py-2 px-3 text-center font-playfair text-xl text-zinc-600 duration-300 ease-out hover:bg-slate-100 hover:text-zinc-700">
              <NavLink prefetch="intent" to={link.link}>
                {link.label}
              </NavLink>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
