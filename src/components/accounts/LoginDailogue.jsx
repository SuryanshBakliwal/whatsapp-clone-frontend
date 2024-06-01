import React, { useContext } from "react";
import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { qrCodeImage } from "../../constants/data";
import { AccountContext } from "../../store/AccountProvider";
import { addUser } from "../../service/api";

const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 45px 0 45px 45px;
`;
const Title = styled(Typography)`
  font-size: 25px;
  margin-top: 20px;
  color: #2f3640;
  font-family: inherit;
  font-weight: bolder;
`;
const StyledList = styled(List)`
  & > li {
    margin-top: 20px;
    padding: 0;
    font-size: 16px;
    color: #718093;
  }
`;
const QRCode = styled("img")({
  height: 250,
  width: 250,
  margin: "45px 0 0 50px",
});
const dialogStyle = {
  height: "80%",
  marginTop: "12px",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

export default function LoginDailogue() {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decode = jwt_decode(res.credential);
    console.log(decode);
    setAccount(decode);
    await addUser(decode);
  };
  const onLoginError = (error) => {
    console.log("Login Failed", error);
  };
  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Component>
          <Container>
            <Title>Use WalkieTalkie on your computer:</Title>
            <StyledList>
              <ListItem>1. Open ChitChat on your phone</ListItem>
              <ListItem>2. Tap Setting and select Linked Device</ListItem>
              <ListItem>
                3. Point your phone to the screen to scan the Code
              </ListItem>
            </StyledList>
          </Container>
          <Box style={{ position: "relative" }}>
            <QRCode src={qrCodeImage} alt="qr code" />
            <Box
              style={{
                position: "absolute",
                top: "50%",
                transform: "translate(50%)",
              }}
            >
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </>
  );
}
