import Layout from "./components/layouts/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import CatsContainer from "./containers/CatsContainer/CatsContainer";
import ColoniesContainer from "./containers/ColoniesContainer/ColoniesContainer";
import Home from "./screens/Home/Home";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useState } from "react";
import { yellow, red, blue } from "@material-ui/core/colors";
import { Paper } from "@material-ui/core";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createMuiTheme({
    typography: {
      fontFamily: ["montserrat", "sans-serif"].join(","),
    },

    palette: {
      type: "dark",
      text: {
        primary: yellow[700],
      },
      primary: {
        main: yellow[700],
      },
      secondary: {
        main: "#ff8f00",
      },
    },
  });

  const lightTheme = createMuiTheme({
    typography: {
      fontFamily: ["Indie Flower", "cursive", "sans-serif"].join(","),
    },
    palette: {
      primary: blue,
      secondary: red,
    },
  });

  return (
      <Paper>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <Switch>
            <Route path="/cats" component={CatsContainer} />
            <Route path="/colonies" component={ColoniesContainer} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
    </ThemeProvider>
      </Paper>
  );
}

export default App;
