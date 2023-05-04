import Nav from "../components/nav";
import Bottom from "../components/Bottom";
import Head from "next/head";
import Promo from "../components/Promo";
import Menu from "../components/Menu";
import FilterButton from "../components/FilterButton";
import Search from "../components/Search";

function Home() {
  return (
    <div>
      <Head></Head>
      <Nav />
      <Promo />
      <dav className="menu-frame">
        <dav className="searchFilter">
          <Search />
          <dav className="Filter">
            <FilterButton />
            <FilterButton />
            <FilterButton />
          </dav>
          <dav className="Filter">
            <FilterButton />
            <FilterButton />
            <FilterButton />
          </dav>
        </dav>
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
      </dav>
      / เมนูแต่ละ Category //
      <Bottom />
    </div>
  );
}
export default Home;
