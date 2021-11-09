import { styled } from "@mui/system";

const SectionContent = styled(`div`)(
  ({ showbottomborder, showRightBorder, theme }: any) => ({
    padding: 16,
    borderBottom: showbottomborder ? `1px solid ${theme.palette.divider}` : 0,
    borderRight: showRightBorder ? `1px solid ${theme.palette.divider}` : 0
  })
);

export default SectionContent;
