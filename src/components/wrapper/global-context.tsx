import * as React from "react";
import type {Profile} from "@shared/clients/WilsonClient.ts";

export interface GlobalContextInterface {
  userId: string
  username: string
  profile?: Profile
  isLoading: boolean
}

export const GlobalContext = React.createContext<GlobalContextInterface>(null as never)
