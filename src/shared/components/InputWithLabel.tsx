import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

const Label = styled("p")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "16px",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid red",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#3599h",
  margin: 0,
  fontSize: "16px",
});

const InputWithLabel = (props) => {
  const { value, setValue, label, type, placeholder } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default InputWithLabel;
