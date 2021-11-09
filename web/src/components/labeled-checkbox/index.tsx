import { FormLabel, CheckBox } from "components/common";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

interface Props {
  type: "warning" | "info" | "success";
  label: string;
  isActive: boolean;
  noBorder?: boolean;
  onChange?: () => void;
}

const LabeledCheckbox = ({
  type,
  label,
  isActive,
  noBorder,
  onChange
}: Props) => (
  <FormLabel
    control={
      <CheckBox
        color={type}
        checked={isActive}
        checkedIcon={<CheckBoxOutlinedIcon />}
        icon={<IndeterminateCheckBoxIcon color={"disabled"} />}
        onChange={onChange}
        disableRipple
      />
    }
    label={label}
    type={type}
    isactive={isActive ? 1 : 0}
    noborder={noBorder ? 1 : 0}
  />
);

export default LabeledCheckbox;
