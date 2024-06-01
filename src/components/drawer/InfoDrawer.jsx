import { ArrowBack } from "@mui/icons-material";
import { Box, Drawer, Typography, styled } from "@mui/material";
import React from "react";
import Profile from "./Profile";

const Header = styled(Box)`
  height: 111px;
  display: flex;
  background-color: #8e24aa;
  color: #ffffff;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;

const Component = styled(Box)`
  height: 85%;
  background-color: #f3e5f5;
`;

const drawerStyled = {
  left: 31,
  top: 17,
  height: "92%",
  maxWidth: "402px",
  boxShadow: "none",
};

export default function InfoDrawer({ open, setOpen }) {
  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: drawerStyled }}
        style={{ zIndex: 1500 }}
      >
        <Header>
          <ArrowBack onClick={() => setOpen(false)} />
          <Typography>Profile</Typography>
        </Header>
        <Component>
          <Profile />
        </Component>
      </Drawer>
      ;
    </>
  );
}
