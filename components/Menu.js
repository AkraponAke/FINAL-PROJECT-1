function Menu() {
  return (
    <dav className="Menu">
      <dav className="headingWrap">
        <dav className="whitebox"></dav>
        <dav className="heading">
          <dav className="imgWrap">
            <dav className="textWrap">
              <dav className="h1 text-white">HAIR CUT</dav>
            </dav>
            <img src="/img/haircut.svg" className="menuImg" />
          </dav>
        </dav>
      </dav>
      <dav className="listWrap">
        <dav className="list">
          <dav>Regular</dav>
          <dav>600 ฿</dav>
        </dav>
        <dav className="list">
          <dav>Student*</dav>
          <dav>350 ฿</dav>
        </dav>
      </dav>
    </dav>
  );
}
export default Menu;
