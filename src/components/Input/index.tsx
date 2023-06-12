import { InputHTMLAttributes, useState } from "react";
import { Container, ContainerInput, ErrorMessage } from "./style";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";
import { phoneMask } from "./mask";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  register?: any;
  name?: string;
  error?: string;
  width?: string;
  type?: string;
  inputMask?: boolean;
}

const Input = ({
  type,
  placeholder,
  name,
  register,
  error,
  width,
  inputMask,
  ...rest
}: InputProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");

  phoneMask(inputValue);
  return (
    <Container {...rest} style={{ width: width }}>
      <ContainerInput>
        <input
          type={type === "password" ? (open ? "text" : "password") : type}
          value={inputValue}
          error={error}
          {...register(name, {
            onChange: (event: any) => {
              if (inputMask) {
                let maskResult = phoneMask(event.target.value);
                setInputValue(maskResult);
              } else {
                setInputValue(event.target.value);
              }
            },
          })}
          placeholder={placeholder}
          {...rest}
        />
        {type === "password" &&
          (open ? (
            <RiEyeCloseLine onClick={() => setOpen(false)} />
          ) : (
            <RiEyeFill onClick={() => setOpen(true)} />
          ))}
      </ContainerInput>
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
};

export default Input;
