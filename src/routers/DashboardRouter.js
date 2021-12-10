import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Dashboard } from "../components/dashboard/Dashboard";

export const DashboardRouter = () => {
    return (
      <div className="moinitor__main">
        <div className="container">
          <div className="monitor__box-container card">
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
  
              {/* <Route exact path="/monitor/sensors" component={SensorsMonitor} /> */}
  
              <Redirect to="/dashboard" />
            </Switch>
          </div>
        </div>
      </div>
    );
  };
  