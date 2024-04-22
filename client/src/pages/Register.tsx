import React from "react";
import ImagePanel from "../components/ImagePanel";
import registerImage from "../assets/register.png";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
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

            <div className="relative flex justify-end ">
              <label
                htmlFor="contactMode"
                className="absolute top-5 text-gray text-sm monitor:font-medium border-b-2 border-gray w-full"
              >
                &nbsp;&nbsp;Contact Mode
              </label>
              <select
                name="contactMode"
                id="contactMode"
                className="h-10 pl-1 focus:outline-none text-sm  z-0"
              >
                <option value="email">Email</option>
                <option disabled selected></option>
              </select>
            </div>

            <InputField
              id="email"
              name="email"
              placeholder="Email"
              type="text"
            />
            <AuthButton to="/" label="Sign Up" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
