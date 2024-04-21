import React from "react";
import loginImage from "../assets/login.png";
import ImagePanel from "../components/ImagePanel";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import AuthButton from "../components/AuthButton";

const Login: React.FC = () => {
  return (
    <section className="w-screen h-screen flex">
      {/* Left half */}
      <ImagePanel image={loginImage} />
      {/* Right half */}
      <div className="w-full tablet:w-1/2 h-full flex justify-center items-center tablet:h-screen">
        <div className="w-3/4 h-auto bg-white rounded-xl ring-2 ring-gray tablet:mr-auto">
          {/* Form */}
          <form className="px-7 py-7 monitor:px-14 monitor:py-8 space-y-3 desktop:space-y-4 monitor:space-y-6">
            <div className="flex justify-between items-center py-4">
              <Heading title="Fill what we know" />
            </div>
            <InputField
              id="email"
              name="email"
              placeholder="Email"
              type="text"
            />
            <InputField
              id="password"
              name="password"
              placeholder="Set Password"
              type="password"
              showEyeIcon
            />

            <AuthButton to="/otp" label="Sign In" />

            <div className="flex justify-center">
              <button className=" w-full bg-white text-black font-bold border-2 text-sm laptop:text-base desktop:text-lg py-2 desktop:py-3 monitor:py-4 rounded-lg">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
