import {ActionContext, type ActionContextInterface} from "@components/action/action-context.tsx";
import {type ReactNode, useEffect, useState} from "react";

interface WrapperProps {
  children: ReactNode
}

const UPDATE_STEP: number = 10
const ACTION_INTERVAL: number = 6000
const ACTION_UPDATE_INTERVAL_MS: number = ACTION_INTERVAL / (100 / UPDATE_STEP)

export default function ActionWrapper({ children }: WrapperProps) {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const updateTimer = setInterval(() => {
      setProgress((prev) => {
        return (prev + UPDATE_STEP) % 101
      })
    }, ACTION_UPDATE_INTERVAL_MS)

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
