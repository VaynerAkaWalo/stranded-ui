import {Button} from "@mui/material";
import {AuthenticationClient} from "@shared/clients/BarricadeClient.ts";
import {authPath} from "@shared/path-utils.ts";

export default function LogoutButton() {

  const logout = () => {
    AuthenticationClient.logout().then(() => {
      window.location.replace(authPath() + "/login?target=" + window.location.toString())
    })
  }

  return (
    <Button variant="outlined" color="warning" onClick={logout}>
      Logout
    </Button>
  )
}
