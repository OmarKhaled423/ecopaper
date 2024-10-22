import { Outlet } from "react-router-dom";
import AppHeader from "./components/header/AppHeader";
import AppFooter from "./components/footer/AppFooter";


function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}

export default App;
