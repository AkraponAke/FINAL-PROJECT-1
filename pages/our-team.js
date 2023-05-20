import Head from "next/head";
import TeamNav from "../components/TeamNav";
import NameCard from "../components/NameCard";

function OurTeam() {
  return (
    <div>
      <TeamNav />
      <div className="teamWrapper">
        <img src="/img/GROUPPHOTO.svg" />{" "}
        <div className="team-frame">
          <div className="team">
            <div className="headingWrap">
              <div className="whitebox"></div>
              <div className=" heading">
                <div className="team-textWrap		">
                  <div className="h1 text-white text-centerr	">STYLIST</div>{" "}
                </div>
              </div>
            </div>
            <div className="cardRow">
              <NameCard />
              <NameCard title="TONMAI" img="/img/Stylist-1.svg" />
              <NameCard title="BASS" img="/img/Stylist-4.svg" />
            </div>
            <div className="cardRow">
              <NameCard title="MAX" img="/img/Stylist-3.svg" />
              <NameCard title="MIEAW" img="/img/Stylist-2.svg" />
              <NameCard title="NES" img="/img/Stylist-5.svg" />
            </div>
            <div className="cardRow">
              <NameCard title="JAMES" img="/img/Stylist-6.svg" />
              <NameCard title="KAI OAK" img="/img/Stylist-7.svg" />
              <NameCard title="GOLF" img="/img/Stylist-8.svg" />
            </div>
          </div>

          <div className="team">
            <div className="headingWrap">
              <div className="whitebox"></div>
              <div className=" heading">
                <div className="team-textWrap		">
                  <div className="h1 text-white text-centerr	">ASSISTANCE</div>{" "}
                </div>
              </div>
            </div>
            <div className="cardRow">
              <NameCard title="TOM" img="/img/Assistance.svg" />
              <NameCard title="EVE" img="/img/Assistance-1.svg" />
              <NameCard title="AE" img="/img/Assistance-2.svg" />
            </div>
            <div className="cardRow">
              <NameCard title="DUMMY" img="/img/Assistance-3.svg" />
              <NameCard title="JANG" img="/img/Assistance-4.svg" />
              <NameCard title="SOMSOM" img="/img/Assistance-5.svg" />
            </div>
          </div>

          <div className="team">
            <div className="headingWrap">
              <div className="whitebox"></div>
              <div className=" heading">
                <div className="team-textWrap		">
                  <div className="h1 text-white text-centerr	">RECEPTION</div>{" "}
                </div>
              </div>
            </div>
            <div className="cardRow">
              <NameCard title="MAY" img="/img/Reception.svg" />
              <NameCard title="FLUK" img="/img/Reception-1.svg" />
              <NameCard title="EVE" img="/img/Reception-2.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
