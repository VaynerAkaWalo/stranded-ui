import { useContext } from "react";
import { GlobalContext } from "@components/wrapper/global-context.tsx";
import LogoutButton from "@components/wrapper/logout-button.tsx";

export default function ProfileView() {
  const { profile } = useContext(GlobalContext);

  return (
    <div className="h-16 border-b-2 flex justify-around items-center">
      <p>name: {profile?.name}</p>
      <p>level: {profile?.level}</p>
      <p>gold: {profile?.gold}</p>
      <LogoutButton />
    </div>
  );
}
