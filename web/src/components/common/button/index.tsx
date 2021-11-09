import { styled } from "@mui/system";
import { default as MuiButton } from "@mui/material/Button";

const Button = styled(MuiButton)(({ size }: { size: string }) => ({
  textTransform: size === "small" ? "capitalize" : "uppercase",
  fontWeight: size === "small" ? 400 : 700,
  color: "white"
}));

export default Button;
