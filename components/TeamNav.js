function TeamNav() {
  return (
    <nav className=" nav-bar flex justify-between x-4 my-4 py-1">
          <a className="h4 text-white" href="/MenuPop">
            <img src="/img/HAMBURGER.svg" className="items-left"/>
          </a>
          <div className="h4 text-white text-center"> OUR TEAM
          </div>
          <a className="h4 text-white" href="/">
            <img src="/img/LANGUAGE.svg" className="items-right"/>
          </a>
    </nav>
  );
}

export default TeamNav;