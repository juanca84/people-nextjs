import Container from "./components/container";
import Head from "next/head";
import Fetch from "isomorphic-fetch";
import Users from "./components/users";

export default function Index(props) {
  console.log('props', props)
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <h2>Next</h2>
        <Users users={props.users}/>
      </Container>
    </>
  );
}

Index.getInitialProps = async (ctx) => {
  const response = await Fetch('https://reqres.in/api/users');
  const resJSON = await response.json();
  return {users: resJSON.data};
}
