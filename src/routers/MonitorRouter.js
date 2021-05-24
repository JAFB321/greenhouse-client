import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MonitorMenu } from "../components/monitor/MonitorMenu";
import { SensorsMonitor } from "../components/sensorControl/SensorsMonitor";

export const MonitorRouter = () => {
  return (
    <div className="moinitor__main">
      <div className="container">
        <div className="monitor__box-container card">
          <Switch>
            <Route exact path="/monitor" component={MonitorMenu} />

            <Route exact path="/monitor/sensors" component={SensorsMonitor} />

            <Redirect to="/monitor" />
          </Switch>
        </div>
      </div>
    </div>
  );
};
