import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import appRouter from "./App.jsx";
import { Provider } from "react-redux";
import appStore from "./Store/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
  <ThemeProvider>
    <RouterProvider router={appRouter} />
    <Toaster />
  </ThemeProvider>
  </Provider>
);
