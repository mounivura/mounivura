
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavBar from "./components/nav/navBar";
import Theme1 from "./components/pages/theme1"
import Theme2 from "./components/pages/theme2"
import Theme3 from "./components/pages/theme3"
import Theme4 from "./components/pages/theme4"
import Theme5 from "./components/pages/theme5"
import Theme6 from "./components/pages/theme6"
import Theme7 from "./components/pages/theme7"
import Theme8 from "./components/pages/themes8"

function App() {
  return (
    <>
        

    <Router>
    <NavBar />
    <Routes>

      <Route exact path="/theme1" element={<Theme1 />} />
      <Route exact path="/theme2" element={<Theme2 />} />
      <Route exact path="/theme3" element={<Theme3 />} />
      <Route exact path="/theme4" element={<Theme4 />} />
      <Route exact path="/theme5" element={<Theme5 />} />
      <Route exact path="/theme6" element={<Theme6 />} />
      <Route exact path="/theme7" element={<Theme7 />} />
      <Route exact path="/theme8" element={<Theme8 />} />




    </Routes>
    </Router>
  

    </>
  );
}

export default App;

