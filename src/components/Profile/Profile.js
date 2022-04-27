import { Typography } from "@mui/material";
import React from "react";
import "./Profile.css";
import CustomTimeline from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { TimelineContent, TimelineItem } from "@mui/lab";
import ButtonCV from "../Button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}:</span>{" "}
            <a href={link} target="_blank" rel="noreferrer">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span>{title}:</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={require("../../assets/images/binh-avatar.jpg")} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container">
          <ButtonCV text={"Download CV"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
