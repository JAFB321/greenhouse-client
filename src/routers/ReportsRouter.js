import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ReportsMenu } from "../components/reports/ReportsMenu";
// import { SensorsMonitor } from "../components/sensorControl";

export const ReportsRouter = () => {
  return (
    <div className="moinitor__main">
      <div className="container">
        <div className="monitor__box-container card">
          <Switch>
            <Route exact path="/reports" component={ReportsMenu} />

            {/* <Route exact path="/monitor/sensors" component={SensorsMonitor} /> */}

            {/* <Redirect to="/reports" /> */}
          </Switch>
        </div>
      </div>
    </div>
  );
};
