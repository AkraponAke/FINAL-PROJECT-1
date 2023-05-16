function Menu({ title = "HAIR CUT", listMenu = [], img = "/img/haircut.svg" }) {
  console.log(listMenu)
  return (
    <div className="Menu">
      <div className="headingWrap">
        <div className="whitebox"></div>
        <div className="heading">
          <div className="imgWrap">
            <div className="textWrap">
              <div className="h1 text-white">{title}</div>
            </div>
            <img src={img} className="menuImg" />
          </div>
        </div>
      </div>
      <div className="listWrap">
        {/* Loop listMenu */}
        {listMenu.map((item, i) => {
          return (
            <div className="list" key={i}>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          )
        }
        )}
      </div>
    </div>
  );
}
export default Menu;
