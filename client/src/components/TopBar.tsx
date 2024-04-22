
import React from "react";

const TopBar: React.FC = () => {
  return (
    <div className="bg-purple p-5 flex justify-end">
      <button className="bg-white px-4 py-1 text-black font-medium rounded-lg hidden  tablet:block">
        Logout
      </button>
    </div>
  );
};

export default TopBar;
