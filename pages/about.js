import Head from "next/head";
import Container from "./components/container";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Container>
        <h2>About</h2>
        <p>Este es mi about</p>
      </Container>
    </>
  );
};

export default about;
