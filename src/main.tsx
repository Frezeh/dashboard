import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { UsersProvider } from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>
);
