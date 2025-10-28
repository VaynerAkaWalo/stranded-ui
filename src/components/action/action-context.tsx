import * as React from "react";

export interface ActionContextInterface {
  onAction: () => void;
  progress: number;
}

export const ActionContext = React.createContext<ActionContextInterface>(
  null as never,
);
