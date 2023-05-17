import { useState } from "react";
import PopUp from "@/components/PopUp";

function TeamNav() {
    //Create Popup active state
  const [popupActive, setPopupActive] = useState(false);

  //Create function to toggle popup
  function togglePopup() {
    setPopupActive(!popupActive);
  }
  
  return (
    <nav className=" nav-bar flex justify-between x-4 my-4 py-1">
      {popupActive && <PopUp />}
          <li className="flex px-2 py-1 ">
          {/* Click then run togglePopup function */}
          <div className="text-blue-500	no-underline text-sm " onClick={togglePopup}>
            <img src="/img/HAMBURGER.svg" className="items-center" />
          </div>
        </li>
          <div className="h4 text-white text-center"> OUR TEAM
          </div>
          <a className="h4 text-white" href="/">
            <img src="/img/LANGUAGE.svg" className="items-right"/>
          </a>
    </nav>
  );
}

export default TeamNav;