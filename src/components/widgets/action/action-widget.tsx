import Widget from "@components/widgets/widget.tsx";
import { useContext, useEffect, useState } from "react";
import { ActionContext } from "@components/action/action-context.tsx";
import { LinearProgress } from "@mui/material";

export default function ActionWidget() {
  const [reward, setReward] = useState<string>("");
  const { events, progress, left, max } = useContext(ActionContext);

  useEffect(() => {
    if (events.length == 0) {
      return;
    }

    const event = events[events.length - 1];
    setReward(`Gold +${event.gold} Exp +${event.exp}`);
  }, [events]);

  return (
    <Widget header="Actions" width={2}>
      <div className="p-4 grid grid-cols-2 gap-3">
        <div className="col-span-2 flex justify-center">
          <p>
            {left}/{max}
          </p>
        </div>
        <div className="col-span-2">
          <LinearProgress variant="determinate" value={progress} />
        </div>
        <p>Reward</p>
        <p className="text-end">{reward}</p>
      </div>
    </Widget>
  );
}
