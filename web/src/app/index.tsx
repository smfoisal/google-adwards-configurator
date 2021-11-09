import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
//
import AppContainer from "components/app-container";
import { ISettings } from "utils/types";
import "styles/global.css";

const GRAPHQL_URI = `http://localhost:4000/graphql`;

// Initialize Apollo Client
const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache()
});

const muiTheme = createTheme({
  components: {
    //
  },
  typography: {
    htmlFontSize: 18,
    fontSize: 14
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#0285F7",
      dark: "#0279E0",
      light: "#2399FF"
    },
    secondary: {
      main: "rgba(255,255,255,0.75)",
      dark: "rgba(255,255,255,0.5)",
      light: "rgba(255,255,255,1)"
    },
    warning: {
      main: "#FEBD01",
      dark: "#E9AD00",
      light: "#FAC837"
    },
    background: {
      default: "#243851",
      paper: "#253147"
    }
  }
});

const App = () => {
  const onExport = (settings: ISettings) => {
    console.log("Operation Exported");
    console.log("###########################");
    console.log(settings);
    //
    alert("Exported: Check console for settings value");
  };

  const onStart = (settings: ISettings) => {
    console.log("Operation Started");
    console.log("###########################");
    console.log(settings);
    //
    alert("Started: Check console for settings value");
  };

  const onStop = () => {
    console.log("Operation Stopped");
    console.log("###########################");
  };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <AppContainer onExport={onExport} onStart={onStart} onStop={onStop} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
