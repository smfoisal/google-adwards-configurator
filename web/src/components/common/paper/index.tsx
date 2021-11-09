import { styled } from "@mui/system";
import { default as MuiPaper } from "@mui/material/Paper";

const Paper = styled(MuiPaper)(({ islight, isfullheight, theme }: any) => ({
  background: islight ? "white" : theme.palette.background.paper,
  height: isfullheight && "calc(100vh - 96px - 72px)",
  maxHeight: isfullheight && "calc(100vh - 96px - 72px)",
  overflow: isfullheight && "auto"
}));

export default Paper;
