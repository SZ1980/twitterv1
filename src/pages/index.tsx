import { type NextPage } from "next";
import NewTweetForm from "~/components/NewTweetForm";

const Home: NextPage = () => {

  return (
    <>
     <header><h1>Home</h1></header>
     <NewTweetForm />
    </>
  );
};

export default Home;
