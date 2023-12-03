import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

// you can just play with it as much as you like.
// creating side bars and tat-side bars...

export const SidebarData = [
  {
    title: "Overview",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Reports",
    path: "/reportes",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Reports",
        path: "/reporets/reports1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Reports 2",
        path: "/reporets/reports2",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Reports 3",
        path: "/reporets/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Prudocs",
    path: "/Prudocs",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Teams",
    path: "/teams",
    icon: <FaIcons.FaCarAlt />,
  },
];
