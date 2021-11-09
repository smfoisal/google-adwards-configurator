import { useState } from "react";
import InputBase from "@mui/material/InputBase";
import { Paper, Button } from "components/common";
import { styled } from "@mui/system";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface Props {
  onAdd: (value: string) => void;
  itemType: string;
}

const InputAddItem = ({ onAdd, itemType }: Props) => {
  const [value, setValue] = useState<string>("");

  const onSubmit = () => {
    onAdd(value);
    setValue("");
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "6px",
          display: "flex",
          alignItems: "center"
        }}
        elevation={0}
        islight={1}
      >
        <Input
          value={value}
          onChange={(
            event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setValue(event.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder={`Enter your ${itemType} here`}
          inputProps={{ "aria-label": `Enter your ${itemType} here` }}
        />
        <Button
          color="primary"
          variant="contained"
          size="medium"
          startIcon={<AddCircleOutlineIcon />}
          sx={{ p: "8px 12px", textTransform: "capitalize" }}
          disableElevation
          onClick={onSubmit}
        >
          Add
        </Button>
      </Paper>
    </form>
  );
};
const Input = styled(InputBase)(({ theme }: any) => ({
  color: theme.palette.background.paper,

  "&::placeholder": {
    color: theme.palette.divider
  }
}));

export default InputAddItem;
