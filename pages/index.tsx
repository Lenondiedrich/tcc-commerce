import { useContext } from "react";
import { HomePage } from "../components/HomePage";
import { Header } from "../components/Layout/Header";
import ShopContext from "../context/ShopContext";

const Home = () => {
  return (
    <div className="bg-primary-black w-screen h-screen overflow-scroll">
      <Header />
      <HomePage />
    </div>
  );
};

export default Home;
