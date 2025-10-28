import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import GlobalWrapper from "@components/wrapper/global-wrapper.tsx";
import ActionWrapper from "@components/action/action-wrapper.tsx";
import { GlobalStyles, StyledEngineProvider } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalWrapper>
        <ActionWrapper>
          <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
          <App />
        </ActionWrapper>
      </GlobalWrapper>
    </StyledEngineProvider>
  </StrictMode>,
);
