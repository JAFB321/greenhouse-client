import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext";
import { ReportsHeader } from "./ReportsHeader";
import { ReportSensor } from "./ReportSensor";

export const ReportsMenu = () => {
  const { userAuth } = useContext(AuthContext);

  const [sensors, setSensors] = useState([]);
  const [selectedSensor, setSelectedSensor] = useState();

  useEffect(() => {
    const getSensors = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/sensor`,
          {
            headers: {
              token: userAuth?.token,
            },
          }
        );

        setSensors(data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSensors();
  }, []);

  return (
    <div>
      <ReportsHeader title="Greenhouse Reports" />

      {selectedSensor ? (
        <ReportSensor sensor={selectedSensor} />
      ) : (
        <div>
          <h2 className="">Select a Sensor to generate a Report</h2>
          <table className="mt-5 report-list">
            <thead>
              <tr>
                <th>Type</th>
                <th>Fullname</th>
              </tr>
            </thead>

            <tbody>
              {sensors.map(({ _id, name, fullname }) => (
                <tr
                  className="mt-1 report-list-item"
                  key={_id}
                  onClick={() => {
                    setSelectedSensor({ _id, fullname });
                  }}
                >
                  <td>{name}</td>
                  <td>{fullname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
