import Nav from "../components/nav";
import Head from "next/head";

function Home() {
  return (
    <div>
      <Head>
        <title>AKE</title>
      </Head>
      <Nav />
      <div className="promoCard-wrapper">
        <promoCard />
        <promoCard />
        <promoCard />
      </div>
    </div>
  );
}

export default Home;
