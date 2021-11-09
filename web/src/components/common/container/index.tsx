import { default as MuiContainer } from "@mui/material/Container";
import { styled } from "@mui/system";

const Container = styled(MuiContainer)(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1
}));

export default Container;
