import { Input } from "antd";
import { ReactNode } from "react";

type InputTypes = "text" | "password"; // Limited to text and password types

interface IProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disable?: boolean;
  placeholder?: string;
  inputType?: InputTypes; // Prop for input type
  prefix?: ReactNode;
  className?: string;
}

const BaseInput: React.FC<IProps> = ({
  value,
  onChange,
  disable = false,
  placeholder = "",
  inputType = "text", // Default to 'text'
  prefix,
  className = "",
}) => {
  const inputClassName = `border border-gray-300 focus-within:!border-amber-500 focus-within:!ring focus-within:!ring-amber-300 hover:border-amber-500 ${className}`;

  // Determine the input component based on the inputType prop
  const renderInput = () => {
    switch (inputType) {
      case "password":
        return (
          <Input.Password
            value={value}
            onChange={onChange}
            disabled={disable}
            placeholder={placeholder}
            prefix={prefix}
            className={`${inputClassName}`}
          />
        );
      case "text":
      default:
        return (
          <Input
            value={value}
            disabled={disable}
            onChange={onChange}
            placeholder={placeholder}
            prefix={prefix}
            className={`${inputClassName}`}
          />
        );
    }
  };

  return renderInput();
};

export default BaseInput;
