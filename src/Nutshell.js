
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { NavBar } from './components/nav/NavBar';
import { ApplicationViews } from "./components/Views/ApplicationViews";


function Nutshell() {
  return <BrowserRouter>
  <Routes>
  <Route path="*" element={

      <>
        <NavBar />
        <ApplicationViews/>
      </>


  } />
    </Routes>
</BrowserRouter>

}

export default Nutshell;


