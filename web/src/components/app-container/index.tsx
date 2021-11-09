import Box from "@mui/material/Box";
import { Container } from "components/common";
import Grid from "@mui/material/Grid";
import Section from "components/section";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { SettingsProvider } from "components/contexts/settings";
import { ISettings } from "utils/types";
import KeywordsList from "components/keywords-list";
import SitesList from "components/sites-list";
import SettingsSection from "components/settings-section";

interface Props {
  onExport: (settings: ISettings) => void;
  onStart: (settings: ISettings) => void;
  onStop: () => void;
}

const AppContainer = ({ onExport, onStart, onStop }: Props) => (
  <Box
    sx={{
      width: "100%",
      height: "100vh",
      paddingTop: "48px",
      paddingBottom: "48px"
    }}
  >
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <Section
            sectionTitle={"keywords"}
            headerIcon={
              <LabelOutlinedIcon color={"primary"} fontSize={"large"} />
            }
            sectionBody={<KeywordsList />}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Section
            sectionTitle={"sites"}
            headerIcon={
              <DesktopWindowsOutlinedIcon
                color={"success"}
                fontSize={"large"}
              />
            }
            sectionBody={<SitesList />}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <SettingsProvider
            onExport={onExport}
            onStart={onStart}
            onStop={onStop}
          >
            <Section
              sectionTitle={"settings"}
              headerIcon={
                <SettingsOutlinedIcon color={"warning"} fontSize={"large"} />
              }
              sectionBody={<SettingsSection />}
            />
          </SettingsProvider>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default AppContainer;
