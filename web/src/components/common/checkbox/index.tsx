import { default as MuiCheckbox } from "@mui/material/Checkbox";
import { styled } from "@mui/system";

const CheckBox = styled(MuiCheckbox)(() => ({
  borderRadius: 4,
  padding: "12px 8px",
  paddingRight: 4
}));

export default CheckBox;
