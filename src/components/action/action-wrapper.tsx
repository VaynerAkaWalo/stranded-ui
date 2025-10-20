import {ActionContext, type ActionContextInterface} from "@components/action/action-context.tsx";
import {type ReactNode, useEffect, useState} from "react";

interface WrapperProps {
  children: ReactNode
}

const UPDATE_INTERVAL: number = 5

export default function ActionWrapper({ children }: WrapperProps) {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const updateTimer = setInterval(() => {
      setProgress((prev) => {
        const updated = prev + UPDATE_INTERVAL
        return updated > 100 ? 100 : updated
      })
    }, 300)

    return () => {
      clearInterval(updateTimer)
    }
  }, []);

  const resetProgress = () => {
    setProgress(0)
  }

  const contextValue: ActionContextInterface = {
    progress,
    onAction: () => resetProgress()
  }

  return (
    <ActionContext.Provider value={contextValue}>
      {children}
    </ActionContext.Provider>
  )
}
