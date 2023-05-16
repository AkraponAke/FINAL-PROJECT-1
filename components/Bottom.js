function Bottom({ activeMenu = "S" }) {
  return (
    <div className="bottom">
      <div className="sizeWrap">
        <div className={`${activeMenu == "S" ? 'isActive' : ''} sizeBotton h1 text-white	}`}>S</div>
        <div className={`${activeMenu == "M" ? 'isActive' : ''} sizeBotton h1 text-white	}`}>M</div>
        <div className={`${activeMenu == "L" ? 'isActive' : ''} sizeBotton h1 text-white	}`}>L</div>
        <div className={`${activeMenu == "XL" ? 'isActive' : ''} sizeBotton h1 text-white	}`}>XL</div>
      </div>
      <div className="whatSize p2">WHAT IS MY HAIR SIZE ?</div>
    </div>
  );
}
export default Bottom;
