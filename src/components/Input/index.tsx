import { InputHTMLAttributes, useState } from "react";
import { ContainerInput } from "./style";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";
import { phoneMask } from "./mask";

import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputMui from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: any;
  name?: string;
  error?: string;
  width?: string;
  type?: string;
  inputMask?: boolean;
  isMoney?: boolean;
}

const Input = ({
  type,
  label,
  name,
  register,
  error,
  width,
  inputMask,
  isMoney,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <TextField
        {...register(name)}
        {...rest}
        error={!!error}
        label={label}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        id="outlined-start-adornment"
        fullWidth
        sx={{ m: 1, width: width, margin: "8px 0 0 0" }}
        InputProps={{
          startAdornment: isMoney && (
            <InputAdornment position="start">R$</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {type === "password" && (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <RiEyeCloseLine /> : <RiEyeFill />}
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText sx={{ margin: "0px !important" }} error={!!error}>
        {error}
      </FormHelperText>
    </>
  );
};

export default Input;
