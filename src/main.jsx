import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import appRouter from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={appRouter}/>
    </ThemeProvider>
    <Toaster />
  </StrictMode>
);
