import React, { useContext } from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";

//components
import LoginDailogue from "./accounts/LoginDailogue";
import { AccountContext } from "../store/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
  height: 100vh;
  background-color: #f3e5f5;
`;

const LoginHeader = styled(AppBar)`
  height: 200px;
  background-color: #ba68c8;
  box-shadow: none;
`;
const Header = styled(AppBar)`
  height: 130px;
  background-color: #8E24AA;
  box-shadow: none;
`;

export default function Messanger() {
  const { account } = useContext(AccountContext);

  return (
    <>
      <Component>
        {account ? (
          <>
            <Header>
              <Toolbar></Toolbar>
            </Header>

            <ChatDialog />
          </>
        ) : (
          <>
            <LoginHeader>
              <Toolbar></Toolbar>
            </LoginHeader>

            <LoginDailogue />
          </>
        )}
      </Component>
    </>
  );
}
