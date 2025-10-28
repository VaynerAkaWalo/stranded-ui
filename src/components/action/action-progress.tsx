import { LinearProgress } from "@mui/material";
import { useContext } from "react";
import { ActionContext } from "@components/action/action-context.tsx";

export default function ActionProgress() {
  const { progress } = useContext(ActionContext);

  return (
    <div className="w-full p-4">
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}
