import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";

const Component = styled(Box)`
  height: 45px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
`;
const Wrapper = styled(Box)`
  padding: 2px;
  background-color: #f3e5f5;
  position: relative;
  width: 100%;
  margin: 0 13px;
  border-radius: 10px;
`;
const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 6px;
  color: #919191;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 16px;
  padding-left: 65px;
  height: 16px;
  font-size: 14px;
`;

export default function Search({ setText }) {
  return (
    <>
      <Component>
        <Wrapper>
          <Icon>
            <SearchIcon fontSize="small" />
          </Icon>
          <InputField
            placeholder="Seach or start new chat"
            onChange={(e) => setText(e.target.value)}
          />
        </Wrapper>
      </Component>
    </>
  );
}
