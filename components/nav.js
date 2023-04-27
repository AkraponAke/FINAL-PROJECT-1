function Nav() {
  const links = [
    {
      id: "id1",
      href: "/",
      icon: "/img/HAMBURGER.svg",
    },
    {
      id: "id2",
      href: "/about",
      icon: "/img/LANGUAGE.svg",
    },
  ];

  return (
    <nav className="text-center nav-bar">
      <ul className="flex justify-between px-4 my-4 py-1">
        {links.map((x) => (
          <li key={x.id} className="flex px-2 py-1">
            <a className="text-blue-500	no-underline text-sm " href={x.href}>
              <img src={x.icon} className="items-center mr-6 ml-5" />
              {""}
            </a>
          </li>
        ))}
        {""}
      </ul>
    </nav>
  );
}

export default Nav;
