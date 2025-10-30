import {
  ActionContext,
  type ActionContextInterface,
  type ActionEvent,
} from "@components/action/action-context.tsx";
import { type ReactNode, useContext, useEffect, useState } from "react";
import { GlobalContext } from "@components/wrapper/global-context.tsx";

interface WrapperProps {
  children: ReactNode;
}

const UPDATE_STEP: number = 10;
const ACTION_INTERVAL: number = 6000;
const ACTION_UPDATE_INTERVAL_MS: number = ACTION_INTERVAL / (100 / UPDATE_STEP);

export default function ActionWrapper({ children }: WrapperProps) {
  const [events, setEvents] = useState<ActionEvent[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [actions, setActions] = useState<number>(1000);

  const { profile, eventSource } = useContext(GlobalContext);

  const onAction = () => {
    setActions((prev) => prev - 1);
    setProgress(0);
  };

  useEffect(() => {
    if (!profile?.id || !eventSource) {
      return;
    }

    eventSource.addEventListener("action", (rawEvent: MessageEvent) => {
      const event: ActionEvent = JSON.parse(rawEvent.data);

      setEvents((prev) => {
        const exists = prev.find((element) => element.id === event.id);
        if (!exists) {
          onAction();
          return [...prev, event];
        }
        return prev;
      });
    });
  }, [profile, eventSource]);

  useEffect(() => {
    const updateTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev + UPDATE_STEP > 100) {
          return 100;
        }
        return prev + UPDATE_STEP;
      });
    }, ACTION_UPDATE_INTERVAL_MS);

    return () => {
      clearInterval(updateTimer);
    };
  }, []);

  const contextValue: ActionContextInterface = {
    progress,
    max: 1000,
    left: actions,
    events,
  };

  return (
    <ActionContext.Provider value={contextValue}>
      {children}
    </ActionContext.Provider>
  );
}
