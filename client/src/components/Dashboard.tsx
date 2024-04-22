import React from "react";

interface DashboardProps {
  username: string;
}

const Dashboard: React.FC<DashboardProps> = ({ username }) => {
  return (
    <div className="w-screen text-center pt-10 text-2xl text-black font-semibold">
      <h1>Welcome, {username}!</h1>
    </div>
  );
};


export default Dashboard;
