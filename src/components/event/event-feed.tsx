import * as React from "react";
import { useEffect } from "react";
import { GlobalContext } from "@components/wrapper/global-context.tsx";
import { ActionContext } from "@components/action/action-context.tsx";

interface Event {
  id: string;
  gold: number;
  exp: number;
  date: number;
}

export default function EventFeed() {
  const [events, setEvents] = React.useState<Event[]>([]);
  const { profile } = React.useContext(GlobalContext);
  const { onAction } = React.useContext(ActionContext);

  useEffect(() => {
    const eventListener = new EventSource(
      "/api/v1/profiles/" + profile?.id + "/events",
    );
    eventListener.addEventListener("action", (rawEvent: MessageEvent) => {
      const event: Event = JSON.parse(rawEvent.data);

      setEvents((prev) => {
        const isNew = prev.find((element) => element.id === event.id);
        if (!isNew) {
          onAction();
          return [...prev, event];
        }
        return prev;
      });
    });
  }, []);

  return (
    <div className="h-1/4 w-1/7 border p-2">
      <ul className="h-full overflow-auto flex flex-col justify-end">
        {events.map((event) => {
          return (
            <li>
              [{new Date(event.date * 1000).toLocaleTimeString()}] Gold +
              {event.gold} Exp +{event.exp}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
