import React from "react";
import instance from "../instance/instance";

const handleSubmit = () => {
  console.log("sending request");
  instance
    .post("/")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
};

const TopBar: React.FC = () => {
  return (
    <div className="bg-purple p-5 flex justify-end">
      <button
        onClick={handleSubmit}
        className="bg-white px-4 py-1 text-black font-medium rounded-lg hidden  tablet:block"
      >
        Logout
      </button>
    </div>
  );
};

export default TopBar;
