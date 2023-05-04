import Head from "next/head";
import TeamNav from "../components/TeamNav";

function OurTeam() {
  return (
    <div>
      <TeamNav />
      <div className="menu-frame"> แก้ให้เ็นของหน้านี้
        <img src="/img/GROUPPHOTO.svg" />
        <div className="team">
          <div className="headingWrap">
            <div className="whitebox"></div>
            <div className="heading">
              <div className="textWrap">
                <div className="h1 text-white">STYLIST</div> ต้องทำให้มันอยู่กลาง
              </div>
            </div>
          </div>

          <div className="cardRow">ดูของพี่โน้ตอีกที</div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
