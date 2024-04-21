import "./RegisterForm.css";
import register from "../assets/register.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const RegisterForm = () => {
  return (
    <section className="w-screen h-screen flex">
      {/* Left half */}
      <div className="w-full tablet:w-1/2 h-full justify-center items-center hidden tablet:flex">
        <img
          src={register}
          className="max-w-full max-h-full"
          alt="Registration"
        />
      </div>

      {/* Right half */}
      <div className="w-full tablet:w-1/2 h-full flex justify-center items-center tablet:h-screen">
        <div className="w-3/4 h-auto bg-white rounded-xl custom-shadow tablet:mr-auto">
          {/* Form */}
          <form className="px-7 py-5 monitor:px-14 monitor:py-8 space-y-3 desktop:space-y-4 monitor:space-y-6">
            <div className="flex justify-between items-center py-4">
              <h2 className="text-2xl laptop:text-3xl desktop:text-4xl monitor:text-5xl font-bold">
                <span className="text-purple">Let us know </span>
                <span className="text-red">!</span>
              </h2>
              <h6 className="text-sm laptop:text-base desktop:text-lg monitor:text-xl underline text-purple font-medium mt-2 cursor-pointer">
                <span className="text-purple">Sign</span>
                <span className="text-red"> In</span>
              </h6>
            </div>
            <div className="relative">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray focus:outline-none text-sm monitor:text-base pl-2"
              />
              <label
                htmlFor="firstName"
                className="absolute left-2 -top-2 monitor:-top-4 text-black monitor:font-medium text-xs desktop:text-sm monitor:text-base peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray peer-placeholder-shown:top-4 transition-all peer-focus:-top-2 monitor:peer-focus:-top-3 peer-focus:text-purple peer-focus:text-xs desktop:peer-focus:text-sm monitor:peer-focus:text-base"
              >
                First Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray focus:outline-none text-sm pl-2"
              />
              <label
                htmlFor="lastName"
                className="absolute left-2 -top-2 monitor:-top-4 text-black monitor:font-medium text-xs desktop:text-sm monitor:text-base peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray peer-placeholder-shown:top-4 transition-all peer-focus:-top-2 monitor:peer-focus:-top-3 peer-focus:text-purple peer-focus:text-xs desktop:peer-focus:text-sm monitor:peer-focus:text-base"
              >
                Last Name
              </label>
            </div>
            <div className="relative ">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Set Password"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray focus:outline-none text-sm pl-2"
              />
              <FontAwesomeIcon
                icon={faEye}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-purple text-sm"
              />
              <label
                htmlFor="password"
                className="absolute left-2 -top-2 monitor:-top-4 text-black monitor:font-medium text-xs desktop:text-sm monitor:text-base peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray peer-placeholder-shown:top-4 transition-all peer-focus:-top-2 monitor:peer-focus:-top-3 peer-focus:text-purple peer-focus:text-xs desktop:peer-focus:text-sm monitor:peer-focus:text-base"
              >
                Set Password
              </label>
            </div>
            <div className="relative ">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Retype Password"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray focus:outline-none text-sm pl-2"
              />
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-purple text-sm"
              />
              <label
                htmlFor="confirmPassword"
                className="absolute left-2 -top-2 monitor:-top-4 text-black monitor:font-medium text-xs desktop:text-sm monitor:text-base peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray peer-placeholder-shown:top-4 transition-all peer-focus:-top-2 monitor:peer-focus:-top-3 peer-focus:text-purple peer-focus:text-xs desktop:peer-focus:text-sm monitor:peer-focus:text-base"
              >
                Retype Password
              </label>
            </div>
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
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray focus:outline-none text-sm pl-2"
              />
              <label
                htmlFor="email"
                className="absolute left-2 -top-2 monitor:-top-4 text-black monitor:font-medium text-xs desktop:text-sm monitor:text-base peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray peer-placeholder-shown:top-4 transition-all peer-focus:-top-2 monitor:peer-focus:-top-3 peer-focus:text-purple peer-focus:text-xs desktop:peer-focus:text-sm monitor:peer-focus:text-base"
              >
                Email
              </label>
            </div>
            <div className="flex justify-center py-3 monitor:py-5">
              <button
                type="submit"
                className=" w-full bg-purple text-white text-sm laptop:text-base desktop:text-lg py-2 desktop:py-3 monitor:py-4 rounded-lg"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
