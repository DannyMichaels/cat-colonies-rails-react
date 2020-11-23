import * as React from 'react'
import Footer from "./Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";


function Layout({ children }) {
  const [darkState, setDarkState] = React.useState(false);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    }
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <>
          <ThemeProvider darkTheme={darkTheme}> 
        <Switch checked={darkState} onChange={handleThemeChange} />
      <div className="layout-children">{children}</div>
      <Footer /> 
        </ThemeProvider>
    </>
  );
}

export default Layout;
