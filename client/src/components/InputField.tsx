import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InputFieldProps {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  showEyeIcon?: boolean;
}
const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  placeholder,
  type,
  showEyeIcon,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray focus:outline-none text-sm monitor:text-base pl-2"
      />
      {showEyeIcon && (
        <FontAwesomeIcon
          icon={type === "password" ? ["fas", "eye"] : ["fas", "eye-slash"]}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-purple text-sm"
        />
      )}
      <label
        htmlFor={id}
        className="absolute left-2 -top-2 monitor:-top-4 text-black monitor:font-medium text-xs desktop:text-sm monitor:text-base peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray peer-placeholder-shown:top-4 transition-all peer-focus:-top-2 monitor:peer-focus:-top-3 peer-focus:text-purple peer-focus:text-xs desktop:peer-focus:text-sm monitor:peer-focus:text-base"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputField;
