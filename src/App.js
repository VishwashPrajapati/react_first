import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Gallary from "./components/Gallary";
import Home from "./components/Home";
import Contactus from "./components/Contactus";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/gallary" component={Gallary} />
        <Route exact path="/contact" component={Contactus} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
