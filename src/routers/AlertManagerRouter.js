import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AlertsManager } from "../components/alertsManager/AlertsManager";

export const AlertManagerRouter = () => {
    return (
      <div className="moinitor__main">
        <div className="container">
          <div className="monitor__box-container card">
            <Switch>
              <Route exact path="/alertmanager" component={AlertsManager} />
  
              {/* <Route exact path="/monitor/sensors" component={SensorsMonitor} /> */}
  
              <Redirect to="/alertmanager" />
            </Switch>
          </div>
        </div>
      </div>
    );
  };
  