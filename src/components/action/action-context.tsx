import * as React from "react";

export interface ActionEvent {
  id: string;
  gold: number;
  exp: number;
  date: number;
}

export interface ActionContextInterface {
  progress: number;
  max: number;
  left: number;
  events: ActionEvent[];
}

export const ActionContext = React.createContext<ActionContextInterface>(
  null as never,
);
