import React, { useContext } from "react";
import { Box, Dialog, styled } from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChat from "./emptychat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { AccountContext } from "../../store/AccountProvider";

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)`
  min-width: 400px;
`;
const RightComponent = styled(Box)`
  min-width: 300px;
  height: 100%;
  width: 70%;
  border-left: 1px solid rgba(0, 0, 0, 0.18);
`;

const dialogStyle = {
  height: "92%",
  marginTop: "12px",
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

export default function ChatDialog() {
  const { person } = useContext(AccountContext);
  return (
    <Dialog
      maxWidth={"md"}
      open={true}
      hideBackDrop={true}
      PaperProps={{ sx: dialogStyle }}
    >
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
        </RightComponent>
      </Component>
    </Dialog>
  );
}
