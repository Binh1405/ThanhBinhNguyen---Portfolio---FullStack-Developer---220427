import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { GitHub } from "@mui/icons-material";
const resumeData = {
  name: "Thanh Binh Nguyen",
  title: "Fullstack Developer",
  birthday: "14th May 1995",
  email: "binhhoangngoc@gmail.com",
  socials: {
    Github: {
      link: "https://github.com/Binh1405",
      text: "My github",
      icon: <GitHubIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/binh-nguyen-64796381/",
      text: "My linkedIn",
      icon: <LinkedInIcon />,
    },
  },
  about:
    "Hey my name is Thanh Binh Nguyen (or Ballance Nguyen) and I am a fullstack web developer. My programming skills include ReactJS, NodeJS, HTML5, CSS3 and MongoDB. I love creating new web apps. For me, a good web app need to meet 3 aspects which are: highly functional, great design and user-friendly. \n\nIn the future, I want to make an app that increases people's awareness about climate change such as global warming, pollutions, greenhouse effect,..while giving advice, good practice and habits that we can do to prevent this, so that our next generations can live in a better world.",
  experiences: [
    {
      title: "Work 1",
      date: "2018 - 2021",
      description: "Event Planer",
    },
    {
      title: "Work 2",
      date: "2017 - 2018",
      description: "Tourguide / Receptionist",
    },
  ],
  education: [
    {
      title: "Education 1",
      date: "2021 - present",
      description: "Fullstack Wed Developer at CoderSchool",
    },
    {
      title: "Education 2",
      date: "2013 - 2017",
      description:
        "Bachelor's Degree in Tourism and Hospitality in Lapland University",
    },
  ],
  skills: [
    {
      title: "Front End",
      description: ["ReactJS", "Javascript", "Bootstrap", "Material UI"],
    },
    {
      title: "Back End",
      description: ["NodeJS", "ExpressJS"],
    },
    {
      title: "Database",
      description: ["MongoDB", "Cloudinary"],
    },
    {
      title: "Source Control",
      description: ["Git", "Github"],
    },
  ],
  addresss: "389/4A Quoc lo 13, Hiep Binh Phuoc, Thu Duc, Vietnam",
  phone: "0326290401",
  job: "Fulltime",
  portfolio: [
    {
      tag: "React & Redux",
      image: require("../assets/images/netflix1.jpg"),
      title: "Movie Stream App",
      description:
        "This is my Netflix demo app that I use React and Redux. The main feature of this app is the main header/billboard which shows movie trailer that can be replayed, muted..",
      links: [
        {
          link: "https://netflix-demo-220420.netlify.app/",
          icon: <MovieIcon />,
        },
        {
          link: "https://github.com/Binh1405/Netflix-Demo---220420.git",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "Redux Toolskit",
      image: require("../assets/images/bookstore3.jpg"),
      title: "BookStore App",
      description:
        "This is my bookstore demo, which uses Redux Toolskit to manage states. The app uses backend json server.",
      links: [
        {
          link: "https://bookstore-reduxtoolskit-demo-220420.netlify.app/",
          icon: <MenuBookIcon />,
        },
        {
          link: "https://github.com/Binh1405/reduxtoolkit-bookstore-220423.git",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "Material UI",
      image: require("../assets/images/shoestore1.jpg"),
      title: "ShoeStore App",
      description:
        "This is my shoe-store which completely designed by Material UI and React Hook Form. Here you can see all shoes and search for a particular shoe by categories or by using search box. The backend is Json server.",
      links: [
        {
          link: "https://shoe-store-220416.netlify.app/",
          icon: <LocalGroceryStoreIcon />,
        },
        {
          link: "https://github.com/Binh1405/Shoe_Store---220325.git",
          icon: <GitHub />,
        },
      ],
    },
  ],
};
export default resumeData;
