import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { HomeRounded } from "@mui/icons-material";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  let pathName = props?.location?.pathname;
  const navigate = useNavigate();
  return (
    <>
      <Nav defaultActiveKey="/" as="ul" className="header">
        <Nav.Item as="li" className="header_navlink">
          <Nav.Link className="header_home">
            <HomeRounded
              className={
                pathName === "/" ? "header_link_icon_active" : "header_link"
              }
              onClick={() => navigate(`/`)}
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="header_navlink">
          <Nav.Link
            eventKey="link-1"
            className={pathName === "/" ? "header_link_active" : "header_link"}
            onClick={() => navigate(`/`)}
          >
            Resume
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="header_navlink">
          <Nav.Link
            eventKey="link-2"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
            onClick={() => navigate(`/portfolio`)}
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Header;
