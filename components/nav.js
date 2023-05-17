import PopUp from "@/components/PopUp";
import { useState } from "react";



function Nav() {

  //Create Popup active state
  const [popupActive, setPopupActive] = useState(false);
  const [popupInActive, setPopupInActive] = useState(true);

  //Create function to toggle popup
  function togglePopup() {
    setPopupActive(!popupActive);
  }
  
  function closePopup() {
    setPopupInActive(!popupInActive);
  }

  const linkLanguage = {
    id: "id2",
    href: "/about",
    icon: "/img/LANGUAGE.svg",
  }


  return (
    <nav className="text-center nav-bar">
      {popupActive && <PopUp />}
      <ul className="flex justify-between px-4 my-4 py-1">

        <li className="flex px-2 py-1 ">
          {/* Click then run togglePopup function */}
          <div className="text-blue-500	no-underline text-sm " onClick={togglePopup}>
            <img src="/img/HAMBURGER.svg" className="items-center" />
          </div>
        </li>

        <li key={linkLanguage.id} className="flex px-2 py-1">
          <a className="text-blue-500	no-underline text-sm " href={linkLanguage.href}>
            <img src={linkLanguage.icon} className="items-center " />
          </a>
        </li>


      </ul>
    </nav>
  );
}

export default Nav;

