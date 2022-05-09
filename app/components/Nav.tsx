import { NavLink } from "remix";

export default function Nav() {
  const links = [
    { label: "Home", link: "/", isMobileLink: true },
    { label: "About", link: "/#about", isMobileLink: false, isInternal: true },
    { label: "Gallery", link: "/gallery", isMobileLink: true },
    { label: "Commissions", link: "/commissions", isMobileLink: true },
    {
      label: "Contact",
      link: "/#contact",
      isMobileLink: true,
      isInternal: true,
    },
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
                  !link.isMobileLink ? "hidden sm:inline" : ""
                } ${
                  isActive && !link.isInternal
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
