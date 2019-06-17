import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import routes from "./routes.js";
import DashboardPage from "./views/Dashboard/Dashboard";
import Error404 from "./page/404";
import Footer from "./components/Footer";
function App() {
  const navs = (
    <Router>
      <div className="mt-0 py-0">
        <Nav prop={routes} />
        <div className="container mt-3 mb-3">
          <Switch>
            {routes.map((prop, key) => (
              <Route path={prop.path} component={prop.component} key={key} />
            ))}
            <Route component={Error404} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" exact component={DashboardPage} />
          {navs}
        </Switch>
      </Router>
    </>
  );
}

export default App;
