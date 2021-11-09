import { styled } from "@mui/system";

export const SettingsContainer = styled(`div`)(() => ({
  padding: 0
}));

export const SettingsRow = styled(`div`)(({ borderbottom, theme }: any) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  borderBottom: borderbottom && `1px solid ${theme.palette.divider}`
}));

export const SettingsData = styled(`div`)(
  ({ direction = "column", borderleft, theme }: any) => ({
    display: "flex",
    flexDirection: direction,
    flexWrap: "wrap",
    padding: "24px 16px",
    paddingVertical: 24,
    borderLeft: borderleft && `1px solid ${theme.palette.divider}`
  })
);

export const ButtonContainer = styled(`div`)(() => ({
  marginBottom: 24
}));

export const InputRow = styled(`div`)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  marginTop: 8,
  marginBottom: 8
}));
