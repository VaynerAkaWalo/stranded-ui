import { useContext } from "react";
import { Footer } from "@components/wrapper/footer.tsx";
import LoadingPage from "@components/wrapper/loading-page.tsx";
import { GlobalContext } from "@components/wrapper/global-context.tsx";
import CreateProfile from "@components/profile/create-profile.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import HeaderSection from "@components/wrapper/header-section.tsx";
import ProfileWidget from "@components/widgets/profile/profile-widget.tsx";
import ActionWidget from "@components/widgets/action/action-widget.tsx";
import EventFeedWidget from "@components/widgets/event/event-feed-widget.tsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF",
    },
  },
});

export default function App() {
  const { isLoading, profile } = useContext(GlobalContext);

  const shouldShowCreateProfile = () => {
    return !isLoading && !profile;
  };

  const shouldShowGame = () => {
    return !isLoading && profile;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="min-h-screen flex flex-col bg-zinc-900 p-8">
        {isLoading && <LoadingPage />}
        {shouldShowCreateProfile() && <CreateProfile />}
        {shouldShowGame() && <Container />}
      </div>
      <Footer />
    </ThemeProvider>
  );
}

function Container() {
  return (
    <div className="flex-grow flex flex-col">
      <HeaderSection />
      <div className="h-full flex-grow py-10 gap-6 grid grid-cols-4 grid-rows-5">
        <ProfileWidget />
        <ActionWidget />
        <EventFeedWidget eventsToKeep={10} />
      </div>
    </div>
  );
}
