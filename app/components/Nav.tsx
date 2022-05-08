import { NavLink } from "remix";

export default function Nav() {
  const links = [
    { label: "Home", link: "/" },
    { label: "About", link: "/#about", internal: true },
    { label: "Gallery", link: "/gallery" },
    { label: "Commissions", link: "/commissions" },
    { label: "Prices", link: "/prices" },
    { label: "Contact", link: "/#contact", internal: true },
  ];

  return (
    <nav className="pb-6 pt-3 sm:py-6">
      <ul className="flex justify-center sm:gap-6 md:gap-8">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              prefetch="intent"
              to={link.link}
              className={({ isActive }) => {
                return `text-md rounded-none py-2 px-3 text-center font-playfair text-zinc-600 duration-300 ease-out hover:bg-slate-100 hover:text-zinc-700 sm:text-lg md:text-xl ${
                  link.internal ? "hidden sm:inline" : ""
                } ${
                  isActive && !link.internal
                    ? "underline underline-offset-8"
                    : ""
                }`;
              }}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}