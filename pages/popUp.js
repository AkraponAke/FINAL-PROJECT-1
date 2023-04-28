import Head from "next/head";
import Nav from "../components/nav";

function About() {
  return (
    <div>
      <Head>
        <title>About page</title>
      </Head>
      <Nav />
      <h1>About</h1>
    </div>
  );
}

export default About;