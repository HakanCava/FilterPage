import React from "react";
import AppRouter from "./router/AppRouter";
import SelectProvider from "./context/SelectContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <SelectProvider>
      <AppRouter />
      <ToastContainer />
    </SelectProvider>
  );
};

export default App;
