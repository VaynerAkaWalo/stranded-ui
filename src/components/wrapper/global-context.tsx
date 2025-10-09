import * as React from "react";

export interface GlobalContextInterface {
  userId: string
  userName: string
  isLoading: boolean
}

export const GlobalContext = React.createContext<GlobalContextInterface>(null as never)
