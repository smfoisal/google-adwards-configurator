import { default as MuiFormControlLabel } from "@mui/material/FormControlLabel";
import { styled } from "@mui/system";

const DEFAULT_BORDER = "rgba(255,255,255,0.1)";

const FormLabel = styled(MuiFormControlLabel)(
  ({ type, isactive, noborder, theme }: any) => ({
    borderWidth: noborder ? 0 : 1,
    borderStyle: "solid",
    borderColor: isactive ? theme.palette[type].main : DEFAULT_BORDER,
    borderRadius: 4,
    margin: !noborder ? 2 : 0,
    marginLeft: noborder ? -11 : 2,
    paddingLeft: 0,
    paddingRight: 8,
    fontSize: 14,
    textTransform: "capitalize"
  })
);

export default FormLabel;
