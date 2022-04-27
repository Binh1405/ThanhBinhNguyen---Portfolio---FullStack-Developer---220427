import React from "react";
import Button from "@mui/material/Button";
import "./Button.css";

const ButtonCV = ({ text, icon }) => {
  return (
    <Button
      variant="contained"
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default ButtonCV;
