import { Box, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../store/AccountProvider";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;
const Image = styled("img")({
  height: 180,
  width: 180,
  padding: "20px 0",
  borderRadius: "50%",
});

const BoxWrapper = styled(Box)`
  background-color: #fff;
  padding: 12px 10px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

  & :first-child {
    font-size: 13px;
    color: #e040fb;
    font-weight: 200;
  }
  & :last-child {
    color: black;
    margin: 15px 0;
  }
`;

const BoxDescription = styled(Box)`
  padding: 15px 20px 28px 30px;
  & > p {
    font-size: 15px;
    color: #8696a0;
  }
`;

export default function Profile() {
  const { account } = useContext(AccountContext);
  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="profile" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <BoxDescription>
        <Typography>
          This is not your username or pin. This name will be visible to your
          WalkieTalkie contacts.
        </Typography>
      </BoxDescription>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Not call, Only message...!!</Typography>
      </BoxWrapper>
    </>
  );
}
