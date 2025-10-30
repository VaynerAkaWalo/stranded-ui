import Widget from "@components/widgets/widget.tsx";
import { useContext } from "react";
import { GlobalContext } from "@components/wrapper/global-context.tsx";

export default function ProfileWidget() {
  const { profile } = useContext(GlobalContext);

  return (
    <Widget header="Profile">
      <div className="p-4 grid grid-cols-2">
        <p>Name</p>
        <p className="text-end">{profile?.name}</p>
        <p>Level</p>
        <p className="text-end">{profile?.level}</p>
        <p>Gold</p>
        <p className="text-end">{profile?.gold}</p>
        <p>Location</p>
        <p className="text-end">Start Island</p>
      </div>
    </Widget>
  );
}
