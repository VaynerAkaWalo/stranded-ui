import {useContext} from "react";
import {Footer} from "@components/wrapper/footer.tsx";
import ProfileView from "@components/profile/profile-view.tsx";
import LoadingPage from "@components/wrapper/loading-page.tsx";
import {GlobalContext} from "@components/wrapper/global-context.tsx";

function App() {
  const { isLoading } = useContext(GlobalContext)

  return (
      <>
        <div className="h-screen">
          {isLoading && <LoadingPage/>}
          {!isLoading && <Container/>}
        </div>
        <Footer/>
      </>
  )
}

export default App


function Container() {
  return (
    <>
      <div className="h-screen">
        <ProfileView/>
      </div>
      <Footer/>
    </>
  )
}
