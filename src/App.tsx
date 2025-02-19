import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@emotion/react";
import { BasicTheme } from "./themes/basic-theme/basicTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={BasicTheme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
