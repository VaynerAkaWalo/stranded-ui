import { CircularProgress } from "@mui/material";

export default function LoadingPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <CircularProgress size="4rem" />
    </div>
  );
}
