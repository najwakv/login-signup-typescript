import React from "react";
import ImagePanel from "../components/ImagePanel";
import registerImage from "../assets/register.png";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import AuthButton from "../components/AuthButton";

library.add(faEye, faEyeSlash);

const Register: React.FC = () => {
  return (
    <section className="w-screen h-screen flex">
      {/* Left half */}
      <ImagePanel image={registerImage} />
      {/* Right half */}
      <div className="w-full tablet:w-1/2 h-full flex justify-center items-center tablet:h-screen">
        <div className="w-3/4 h-auto bg-white rounded-xl ring-2 ring-gray tablet:mr-auto">
          {/* Form */}
          <form className="px-7 py-7 monitor:px-14 monitor:py-8 space-y-3 desktop:space-y-4 monitor:space-y-6">
            <div className="flex justify-between items-center py-4">
              <Heading title="Let us know" />
              <h6 className="text-sm laptop:text-base desktop:text-lg monitor:text-xl underline text-purple font-medium mt-2 cursor-pointer">
                <span className="text-purple">Sign</span>
                <span className="text-red"> In</span>
              </h6>
            </div>
            <InputField
              id="firstName"
              name="firstName"
              placeholder="First Name"
              type="text"
            />
            <InputField
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              type="text"
            />
            <InputField
              id="password"
              name="password"
              placeholder="Set Password"
              type="password"
              showEyeIcon
            />
            <InputField
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Retype Password"
              type="password"
              showEyeIcon
            />
            <div className="relative">
              <select
                id="contactMode"
                name="contactMode"
                className="peer h-10 w-full border-b-2 border-gray focus:outline-none text-sm pl-1 "
              >
                <option value="email">Email</option>
                <option value="" disabled selected></option>
              </select>
              <label
                htmlFor="contactMode"
                className="absolute w-full left-2 top-4 monitor:-top-4 text-sm monitor:font-medium desktop:text-sm monitor:text-base peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray peer-placeholder-shown:top-4 transition-all peer-focus:-top-2 monitor:peer-focus:-top-3 peer-focus:text-purple peer-focus:text-xs text-gray desktop:peer-focus:text-sm monitor:peer-focus:text-base"
              >
                Contact mode
              </label>
            </div>
            <InputField
              id="email"
              name="email"
              placeholder="Email"
              type="text"
            />
            <AuthButton to="/" label="Sign Up"/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
