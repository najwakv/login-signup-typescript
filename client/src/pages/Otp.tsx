import React, { useEffect, useState } from "react";
import registerImage from "../assets/register.png";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import AuthButton from "../components/AuthButton";
import ImagePanel from "../components/ImagePanel";

const Otp: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  // Timer to decrease time remaining every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Clear timer when time reaches 0
    if (timeRemaining === 0) {
      clearInterval(timer);
      setIsResendEnabled(true);
    }

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const handleResendClick = () => {
    setTimeRemaining(60);
    setIsResendEnabled(false); 
  };

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
              <Heading title="Enter OTP" />
            </div>
            <InputField
              id="otp"
              name="otp"
              placeholder="Enter Otp"
              type="text"
            />
            <AuthButton to="/" label="Submit" />
            <button
              onClick={handleResendClick}
              disabled={!isResendEnabled}
              className={`w-full  font-bold border-2 text-sm laptop:text-base desktop:text-lg py-2 desktop:py-3 monitor:py-4 rounded-lg ${
                isResendEnabled
                  ? "bg-white text-black  cursor-pointer"
                  : "bg-white text-gray border-gray cursor-not-allowed"
              }`}
            >
              Resend
            </button>
            {!isResendEnabled && (
              <div className="text-purple text-xs laptop:text-sm desktop:text-base monitor:text-lg  mt-2 text-center font-medium">
                Did'nt get otp ? Resend in {timeRemaining} seconds
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Otp;
