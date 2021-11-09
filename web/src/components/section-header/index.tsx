import { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

interface Props {
  icon: ReactNode;
  title: string;
}

const SectionHeader = ({ icon, title }: Props) => (
  <HeaderContainer>
    <IconBox>{icon}</IconBox>
    <Typography variant="h4">{title}</Typography>
  </HeaderContainer>
);

const HeaderContainer = styled(`div`)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textTransform: "capitalize",
  marginBottom: 16
}));

const IconBox = styled(`span`)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginRight: 12
}));

export default SectionHeader;
