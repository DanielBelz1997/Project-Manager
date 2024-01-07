import { useState } from "react";
import { Center, Tooltip, UnstyledButton, Stack, rem } from "@mantine/core";
import {
  IconHome2,
  IconSeeding,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import classes from "../NavbarMinimal.module.css";
import React from "react";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  to: string; // Add a 'to' prop for the link destination
}

function NavbarLink({ icon: Icon, label, to }: NavbarLinkProps) {
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const handleClick = () => {
    navigate(to); // Use the navigate function to go to the specified route
  };

  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={handleClick} className={classes.link}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", to: "/" },
  { icon: IconSeeding, label: "Create Project", to: "/createProject" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", to: "/analytics" },
  { icon: IconCalendarStats, label: "Releases", to: "/releases" },
  { icon: IconUser, label: "Account", to: "/account" },
  { icon: IconFingerprint, label: "Security", to: "/security" },
  { icon: IconSettings, label: "Settings", to: "/settings" },
];

export function NavbarMinimal() {
  const links = mockdata.map((link) => (
    <NavbarLink {...link} key={link.label} />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <MantineLogo type="mark" size={0} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink
          icon={IconSwitchHorizontal}
          label="Change account"
          to="/change-account"
        />
        <NavbarLink icon={IconLogout} label="Logout" to="/logout" />
      </Stack>
    </nav>
  );
}
