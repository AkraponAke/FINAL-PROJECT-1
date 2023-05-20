function NameCard({ title = "POINT", img = "/img/POINT.svg" }) {
  return (
    <div className="team-card">
      <div className="team-pic-wrap">
        <img src={img} className="team-pic rounded-xl	" />
      </div>
      <div class="nameBox h5">{title}</div>
    </div>
  );
}
export default NameCard;
