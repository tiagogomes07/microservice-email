import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "../src/navbar/navbar";
import CreateTemplate from "../src/gridTemplateEmail/create-email";
//import { EnviarEmail } from "../src/enviaremail/enviar-email";
import formWYSUWYG from "../src/wysiwyg/form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <div>
      <NavBar />

      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <div className="row">
        <div className="col-md-2">
          <div className="w3-sidebar w3-bar-block">
            <Link className="w3-bar-item w3-button" to="/">
              Email Templates
            </Link>
            <Link className="w3-bar-item w3-button" to="/CreateTemplate">
              Novo Modelo Email
            </Link>
            <Link className="w3-bar-item w3-button" to="/EnviarEmail">
              Enviar Email
            </Link>
          </div>
        </div>
        <div className="col-md-10">
          <Route exact path="/" component={App} />
          <Route exact path="/CreateTemplate" component={CreateTemplate} />
          <Route exact path="/EnviarEmail" component={formWYSUWYG} />
        </div>
      </div>
    </div>
  </Router>,

  document.getElementById("root")
);
registerServiceWorker();
