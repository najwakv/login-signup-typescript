import React from "react";
import TopBar from "../components/TopBar";
import Dashboard from "../components/Dashboard";

const Home: React.FC = () => {
  return (
    <>
      <div className="w-screen h-screen bg-gray">
        <TopBar />
        <Dashboard username="John" />
      </div>
    </>
  );
};

export default Home;
