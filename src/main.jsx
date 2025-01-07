import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import ThemeProvider from "./Context/ThemeProvider";
import AuthProvider from "./Context/AuthProvider";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router}>
        </RouterProvider>
        <ToastContainer />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
