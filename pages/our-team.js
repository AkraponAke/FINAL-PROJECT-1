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
              <NameCard />
              <NameCard />
            </div>
            <div className="cardRow">
              <NameCard />
              <NameCard />
              <NameCard />
            </div>
            <div className="cardRow">
              <NameCard />
              <NameCard />
              <NameCard />
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
              <NameCard />
              <NameCard />
              <NameCard />
            </div>
            <div className="cardRow">
              <NameCard />
              <NameCard />
              <NameCard />
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
              <NameCard />
              <NameCard />
              <NameCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
