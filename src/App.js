import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Skills from "./components/pages/skills/Skills";
import Projects from "./components/pages/projects/Projects";
import Educations from "./components/pages/educations/Educations";
import Contacts from "./components/pages/contacts/Contacts";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path={["/skills", ""]} component={Skills}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/education" component={Educations}></Route>
          <Route exact path="/contact" component={Contacts}></Route>
        </Switch>
      </Router>
      <div className="alert">
        <h1>
          Hey, I Haven't Worked On Responsiveness Of This Website, Please Open
          This Website In Computer. Thankyou for understanding :)
        </h1>
      </div>
    </>
  );
}

export default App;
