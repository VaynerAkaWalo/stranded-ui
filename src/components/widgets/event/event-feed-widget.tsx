import Widget from "@components/widgets/widget.tsx";
import { useContext } from "react";
import { ActionContext } from "@components/action/action-context.tsx";

interface EventFeedProps {
  eventsToKeep?: number;
}

export default function EventFeedWidget({ eventsToKeep = 12 }: EventFeedProps) {
  const { events } = useContext(ActionContext);

  return (
    <Widget header="Loot" height={2}>
      <div className={`p-3 grid grid-cols-2 grid-rows-${eventsToKeep}`}>
        {events
          .slice(Math.max(0, events.length - eventsToKeep), events.length)
          .map((event) => {
            return (
              <>
                <p>[{new Date(event.date * 1000).toLocaleTimeString()}]</p>
                <p className="text-end">
                  Gold +{event.gold} Exp +{event.exp}
                </p>
              </>
            );
          })}
      </div>
    </Widget>
  );
}
