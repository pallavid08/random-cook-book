import "./styles.css";
import MealsListDisplay from "./MealsListDisplay";
import MealDetailsDisplay from "./MealDetailsDisplay";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div className="appTitle">The Random Cook Book</div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/meals/:id" exact component={MealDetailsDisplay} />
          <Route path="/meals/" exact component={MealsListDisplay} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
