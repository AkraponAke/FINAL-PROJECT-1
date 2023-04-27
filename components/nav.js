function Nav() {
  const links = [
    { id: "id1", label: "Home", href: "/" },
    { id: "id3", label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="text-center">
      <ul className="flex justify-between px-4 my-4 py-1">
        <img src="/img/Property 1=White ham.svg" />
        {""}
        {links.map((x) => (
          <li key={x.id} className="flex px-2 py-1">
            <a className="text-blue-500	no-underline text-sm" href={x.href}>
              {x.label}
            </a>
          </li>
        ))}
        <img src="/img/Property 1=EN WH.svg" />
        {""}
      </ul>
    </nav>
  );
}

export default Nav;
