import {useContext} from "react";
import {GlobalContext} from "@components/wrapper/global-context.tsx";

export default function ProfileView() {
  const { username } = useContext(GlobalContext)

  return (
    <div className="h-12 border-b-2 flex justify-center items-center gap-10">
      <p>name: {username}</p>
      <p>level: {0}</p>
      <p>gold: {0}</p>
    </div>
  )
}
