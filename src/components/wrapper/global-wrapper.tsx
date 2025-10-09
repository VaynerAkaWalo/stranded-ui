import {type ReactNode, useEffect, useState} from "react";
import {GlobalContext, type GlobalContextInterface} from "@components/wrapper/global-context.tsx";
import {AuthenticationClient, type Identity} from "@shared/clients/BarricadeClient.ts";
import {authPath} from "@shared/path-utils.ts";

interface WrapperProps {
  children: ReactNode
}

export default function GlobalWrapper({ children }: WrapperProps) {
  const [user, setUser] = useState<Identity | null>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const ensureLoggedIn = async () => {
      try {
        const { data } = await AuthenticationClient.getIdentity()
        setUser(data)
        setIsLoading(false)
      } catch {
        window.location.replace(authPath() + "/login?target=" + window.location.toString())
      }
    }
    ensureLoggedIn()
  },[]);

  const context: GlobalContextInterface = {
    userId: user?.id ?? '',
    userName: user?.name ?? '',
    isLoading
  }

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  )
}
