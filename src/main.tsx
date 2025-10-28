import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import GlobalWrapper from "@components/wrapper/global-wrapper.tsx";
import ActionWrapper from "@components/action/action-wrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalWrapper>
      <ActionWrapper>
        <App />
      </ActionWrapper>
    </GlobalWrapper>
  </StrictMode>,
);
