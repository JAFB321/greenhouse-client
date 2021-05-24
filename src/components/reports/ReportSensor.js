import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext";
import { ReportGraphDates } from "./graphs/ReportGraphDates";

export const ReportSensor = ({ sensor }) => {
  const { userAuth } = useContext(AuthContext);

  const [sensorHistory, setSensorHistory] = useState([]);

  useEffect(() => {
    const getSensorPopulated = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/sensor/${sensor._id}`,
          {
            headers: {
              token: userAuth?.token,
            },
          }
        );

        setSensorHistory(
          data?.data.SensorReads.slice(-1000).map(({ value, date }) => ({
            x: new Date(Number.parseInt(date)),
            y: value,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getSensorPopulated();
  }, [sensor]);

  return (
    <div>
      <ReportGraphDates
        sensorHistory={sensorHistory}
        sensorName={sensor.fullname}
      />
    </div>
  );
};
