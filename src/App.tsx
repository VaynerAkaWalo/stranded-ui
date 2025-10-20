import {useContext} from "react";
import {Footer} from "@components/wrapper/footer.tsx";
import ProfileView from "@components/profile/profile-view.tsx";
import LoadingPage from "@components/wrapper/loading-page.tsx";
import {GlobalContext} from "@components/wrapper/global-context.tsx";
import CreateProfile from "@components/profile/create-profile.tsx";
import {createTheme, ThemeProvider} from "@mui/material";
import EventFeed from "@components/event/EventFeed.tsx";
import ActionProgress from "@components/action/action-progress.tsx";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  const { isLoading, profile } = useContext(GlobalContext)

  const shouldShowCreateProfile = () => {
    return !isLoading && !profile
  }

  const shouldShowGame = () => {
    return !isLoading && profile
  }

  return (
      <ThemeProvider theme={darkTheme}>
        <div className="h-screen">
          {isLoading && <LoadingPage/>}
          {shouldShowCreateProfile() && <CreateProfile/>}
          {shouldShowGame() && <Container/>}
        </div>
        <Footer/>
      </ThemeProvider>
  )
}

function Container() {
  return (
    <div className="h-screen">
      <ProfileView/>
      <ActionProgress/>
      <EventFeed/>
    </div>
  )
}
