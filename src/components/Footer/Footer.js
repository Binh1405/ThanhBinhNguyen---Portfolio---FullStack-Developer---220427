import React from "react";
import "./Footer.css";
import Typography from "@mui/material/Typography";
import resumeData from "../../utils/resumeData";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and developed by{" "}
          <a href="/" target="_blank">
            Thanh Binh Nguyen
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
