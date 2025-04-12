import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
import "./App.css";
import { Provider } from "react-redux";
import store from "./contexts/store"
import "./chartSetup"
const App = () => {

  return (
    <Provider store={store}>
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
    </Provider>
  );
};

export default App;
