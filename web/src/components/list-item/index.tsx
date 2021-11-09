import { styled } from "@mui/system";
import { Button } from "components/common";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

interface Props {
  value: string;
  onClear: () => void;
}

const ListItem = ({ value, onClear }: Props) => (
  <ItemContainer>
    <FlexBox>{value}</FlexBox>
    <ButtonContainer>
      <Button
        color="secondary"
        variant="outlined"
        size="small"
        startIcon={<RemoveCircleOutlineOutlinedIcon />}
        onClick={onClear}
      >
        Clear
      </Button>
    </ButtonContainer>
  </ItemContainer>
);

const ItemContainer = styled(`div`)(() => ({
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 16
}));

const ButtonContainer = styled(`div`)(() => ({
  display: "flex",
  alignSelf: "flex-end",
  marginLeft: 8
}));

const FlexBox = styled(`span`)(() => ({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap"
}));

export default ListItem;
