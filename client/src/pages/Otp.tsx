import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import AuthButton from "../components/AuthButton";

const Otp: React.FC = () => {
  const [timer, setTimer] = useState(60);
  const [isResending, setIsResending] = useState(false);

  // Function to handle OTP input change
  const handleOTPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOTP(event.target.value);
  };

  // Function to handle OTP submission
  const handleSubmitOTP = () => {
    
  };

  // Function to handle OTP resend
  const handleResendOTP = () => {
    // Resend OTP logic here
    setIsResending(true);
    // Start timer for OTP expiry
    setTimeout(() => {
      setIsResending(false);
      setTimer(60);
    }, 60000);
  };

  // Countdown timer for OTP expiry
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-auto h-auto bg-white rounded-xl ring-2 ring-gray">
        {/* Form */}
        <form className="px-7 py-7 monitor:px-14 monitor:py-8 space-y-3 desktop:space-y-4 monitor:space-y-6">
          <div className="flex justify-between items-center py-4">
            <Heading title="Enter Otp" />
          </div>
          <InputField id="otp" name="otp" placeholder="OTP" type="number" />
          <AuthButton to="/" label="Submit" />
          {timer > 0 ? (
            <p className="text-center">{timer} seconds</p>
          ) : (
            <p className="text-center">
              OTP expired.{" "}
              <button onClick={handleResendOTP} disabled={isResending}>
                Resend OTP
              </button>
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Otp;
