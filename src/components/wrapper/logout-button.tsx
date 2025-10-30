import { Button } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { AuthenticationClient } from "@shared/clients/BarricadeClient.ts";
import { authPath } from "@shared/path-utils.ts";

export default function LogoutButton() {
  const logout = () => {
    AuthenticationClient.logout().then(() => {
      window.location.replace(
        authPath() + "/login?target=" + window.location.toString(),
      );
    });
  };

  return (
    <Button className="gap-3 ml-auto" variant="text" onClick={logout}>
      <p className="">Logout</p>
      <Logout />
    </Button>
  );
}
