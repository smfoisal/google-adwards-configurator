import Grid from "@mui/material/Grid";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import { Button } from "components/common";
import { useSettings } from "components/contexts/settings";

const SettingsActionButtons = () => {
  const { onExportReport, onStop, onStartTriggered } = useSettings();

  return (
    <Grid container spacing={2} sx={{ marginBottom: "32px" }}>
      <Grid item xs={12} md={6}>
        <Button
          onClick={onExportReport}
          variant={"contained"}
          color={"warning"}
          size={"large"}
          disableElevation
          sx={{ marginRight: "16px" }}
        >
          Export report
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          onClick={onStop}
          variant={"contained"}
          color={"info"}
          size={"large"}
          disableElevation
          startIcon={<PauseCircleOutlineIcon />}
        >
          Stop
        </Button>
        <Button
          onClick={onStartTriggered}
          variant={"contained"}
          color={"success"}
          size={"large"}
          disableElevation
          startIcon={<PlayCircleOutlinedIcon />}
          sx={{ marginLeft: "16px" }}
        >
          Start
        </Button>
      </Grid>
    </Grid>
  );
};

export default SettingsActionButtons;
