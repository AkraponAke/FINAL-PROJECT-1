import { useState } from "react";

  

function PopUp() {
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
  

  return (
    <div className="PopWrap">
      {popupInActive && <PopUp />}
      <div className="PopMenuWrap">
        
        <li className="flex px-2 py-1 ">
          {/* Click then run togglePopup function */}
          <div className="text-blue-500	no-underline text-sm " onClick={closePopup}>
            <img src="/img/HAMBURGER.svg" className="items-center" />
          </div>
        </li>
        
        <div className="MenuLink">
          <a className="h3 text-white" href="/">
            MENU
          </a>
          <a className="h3 text-white" href="/our-team">
            OUR TEAM
          </a>
        </div>
      </div>
      <div className="ContactWrap">
        <div className="Contact">
          <img src="/img/INSTAGRAM.svg" className="items-left" />
          <a
            className="p2 text-white"
            href="https://www.instagram.com/bright.hair.studio/"
          >
            bright.hair.studio
          </a>
        </div>
        <div className="Contact">
          <img src="/img/FACEBOOK.svg" className="items-left" />
          <a
            className="p2 text-white"
            href="https://www.instagram.com/brighthairstudio/"
          >
            Bright Hair Studio
          </a>
        </div>
        <div className="Contact">
          <img src="/img/LINE.svg" className="items-left" />
          <a
            className="p2 text-white"
            href="https://www.instagram.com/brighthairstudio/"
          >
            @brighthairstudio
          </a>
        </div>
        <div className="Contact">
          <img src="/img/PHONE.svg" className="items-left" />
          <a className="p2 text-white" href="tel:+66929645991">
            +66 92-964-5991
          </a>
        </div>
        <div className="Contact">
          <img src="/img/LOCATION.svg" className="items-left" />
          <a
            className="p2 text-white"
            href="https://goo.gl/maps/ZtN1bNq3JtKhNp8G7"
          >
            186 Chulalongkorn 50, Rama 4 Road, Bangkok
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
