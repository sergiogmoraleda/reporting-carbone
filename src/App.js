import React from "react";
import carboneSDK from "carbone-sdk-js";
import { generateReport } from "./generateReport";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
//const _template = document.getElementById("21bc2ea02373fb14dfe34e490d52812f67b0a197f52668dc9faf7fb547f341a1");
//onClick={generateReport}


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="site-wrapper-inner">
              <div className="btn-group">
                <Button onClick= {generateReport} variant="secondary" size="md">
                  Generate Report
                </Button>{" "}
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
