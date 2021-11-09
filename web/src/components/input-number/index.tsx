import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface Props {
  value: number;
  onChange: (value: number) => void;
  noPaddingLeft?: boolean;
}

const InputNumber = ({ value, onChange, noPaddingLeft }: Props) => {
  const onIncrement = () => {
    onChange(value + 1);
  };

  const onDecrement = () => {
    if (value - 1 >= 0) {
      onChange(value - 1);
    }
  };

  return (
    <InputContainer nopaddingleft={noPaddingLeft ? 1 : 0}>
      <Input type="number" value={value} readOnly />
      <ActionButtons>
        <IncrementButton onClick={onIncrement}>
          <AddIcon sx={{ fontSize: "13px" }} />
        </IncrementButton>
        <DecrementButton onClick={onDecrement}>
          <RemoveIcon sx={{ fontSize: "13px" }} />
        </DecrementButton>
      </ActionButtons>
    </InputContainer>
  );
};

const InputContainer = styled(`div`)(
  ({ nopaddingleft }: { nopaddingleft: number }) => ({
    display: "flex",
    flexDirection: "row",
    height: 33,
    marginLeft: nopaddingleft ? 0 : 8,
    marginRight: 8
  })
);

const Input = styled(`input`)(() => ({
  width: 40,
  height: 33,
  backgroundColor: "transparent",
  borderBottom: "none",
  border: `1px solid rgba(255,255,255,0.2)`,
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
  color: "white",
  textAlign: "center",
  fontSize: 14,

  "&:hover, &:focus, &:active": {
    border: `1px solid rgba(255,255,255,0.2)`,
    outline: "none"
  }
}));

const ActionButtons = styled(`div`)(() => ({
  display: "flex",
  flexDirection: "column"
}));

const IncrementButton = styled(`button`)(() => ({
  width: 16,
  height: 17,
  padding: 0,
  backgroundColor: "transparent",
  border: `1px solid rgba(255,255,255,0.2)`,
  borderLeft: "none",
  borderBottom: "none",
  borderTopRightRadius: 4,
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 8,

  "&:hover, &:focus, &:active": {
    outline: "none"
  }
}));

const DecrementButton = styled(`button`)(() => ({
  width: 16,
  height: 16,
  backgroundColor: "transparent",
  border: `1px solid rgba(255,255,255,0.2)`,
  borderLeft: "none",
  borderBottomRightRadius: 4,
  color: "white",
  padding: 0,
  alignItems: "center",
  justifyContent: "center",

  "&:hover, &:focus, &:active": {
    outline: "none"
  }
}));

export default InputNumber;
