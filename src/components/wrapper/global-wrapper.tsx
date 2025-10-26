import {type ReactNode, useEffect, useState} from "react";
import {GlobalContext, type GlobalContextInterface} from "@components/wrapper/global-context.tsx";
import {AuthenticationClient, type Identity} from "@shared/clients/BarricadeClient.ts";
import {authPath} from "@shared/path-utils.ts";
import {type Profile, StrandedClient} from "@shared/clients/WilsonClient.ts";

interface WrapperProps {
  children: ReactNode
}

interface GoldChangeEvent {
  id: string
  gold: number
}

export default function GlobalWrapper({ children }: WrapperProps) {
  const [user, setUser] = useState<Identity | null>()
  const [profile, setProfile] = useState<Profile | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const ensureLoggedIn = async () => {
      try {
        const { data } = await AuthenticationClient.getIdentity()
        setUser(data)
      } catch {
        window.location.replace(authPath() + "/login?target=" + window.location.toString())
      }

    }

    const loadProfile = async () => {
      const { data: profiles } = await StrandedClient.GetProfiles()
      if (profiles.length != 0) {
        setProfile(profiles[0])
      }
    }

    const keepalive = () => {
      setInterval(() => {
        ensureLoggedIn()
      }, 10000)
    }
    ensureLoggedIn().then(() => {
      loadProfile().then(() => {
        setIsLoading(false)
      })
    })
    keepalive()
  },[]);

  useEffect(() => {
    const eventListener = new EventSource("/api/v1/profiles/" + profile?.id + "/events")
    eventListener.addEventListener("gold-change", (rawEvent: MessageEvent) => {
      const event: GoldChangeEvent = JSON.parse(rawEvent.data)

      setProfile(prev => {
        if (!prev) {
          return undefined
        }

        return {
          ...prev,
          gold: event.gold
        }
      })
    })
  }, [profile]);

  const context: GlobalContextInterface = {
    userId: user?.id ?? '',
    username: user?.name ?? '',
    profile,
    isLoading
  }

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  )
}
