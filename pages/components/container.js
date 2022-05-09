import Navigation from "./navigation";
import Head from "next/head";

const Container = (props) => {
  return (
    <>
      <Head>
        <title> Next.js Project</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cerulean/bootstrap.min.css"
          integrity="sha384-3fdgwJw17Bi87e1QQ4fsLn4rUFqWw//KU0g8TvV6quvahISRewev6/EocKNuJmEw"
          crossOrigin="anonymous"
        />
      </Head>
      <Navigation />
      <div className="container p-4">{props.children}</div>
    </>
  );
};
export default Container;
