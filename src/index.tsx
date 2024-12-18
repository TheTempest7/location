import React, {createContext} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootStore from  "01-app/store/rootStore"
import App from "01-app/App";
import {RootStoreContext} from "07-shared/lib/hooks/useStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
      <RootStoreContext.Provider value={new RootStore()}>
          <App />
      </RootStoreContext.Provider>
  </React.StrictMode>
);
