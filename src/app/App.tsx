import {Suspense} from 'react'
import {Flip, ToastContainer} from "react-toastify";
import {RouterProvider} from "react-router-dom";
import {appRoutes} from "./routes/appRoutes";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {appTheme} from "../styles/appTheme.tsx";

export function App() {
    return (
      <Suspense>
              <ThemeProvider theme={appTheme}>
                  <RouterProvider router={appRoutes} />
                  <ToastContainer
                      hideProgressBar
                      theme="colored"
                      autoClose={2000}
                      style={{
                          borderRadius: "100px",
                      }}
                      transition={Flip}
                  />
                  <CssBaseline />
              </ThemeProvider>
      </Suspense>
  )
}

