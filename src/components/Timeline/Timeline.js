import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./Timeline.css";
import { Typography } from "@mui/material";

export default function CustomTimeline({ title, icon, children }) {
  return (
    <Timeline className={"timeline"}>
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineDot
          className={"timeline_dot_header"}
          style={{ backgroundColor: "#ffc500" }}
        >
          {icon}
        </TimelineDot>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
}
