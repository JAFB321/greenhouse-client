import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { checkHealth } from "../../helpers/ZoneHelpers";

export const ZoneInfo = ({ zoneId, name, plants, sensors }) => {
  // const [plantsHealth, setPlantsHealth] = useState([]);

  const plantsHealth = [
    {
      plant: {
        "_id": "644dd35646fb5f611abbd385",
        imageURL:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Tomate_2008-2-20.JPG',
        type: 'Tomate'
      },
      status: {
        ok: false,
        warnings: [ {sensorId: 'asd'}]
      }
    },
    {
      plant: {
        "_id": "644dd35646fb5f611abbd386",
      imageURL:'https://www.animalgourmet.com/wp-content/uploads/2019/04/onion-1565604_1920.jpg',
      type: 'Cebolla'
      },
      status: {
        ok: true,
        warnings: []
      }
    },
    
  ]

  // const [sensorsIndicators, setSensorsIndicators] = useState([]);

  const sensorsIndicators = [ 
    {
      "_id": "644dd35646fb5f611abbd384",
      "reads": [],
      model: 'C-23',
      type: 'Temperatura',
      lastValue: 29,
      ReadingType: {
        name: 'Temperatura',
        symbol: 'C',

        MeasureType: {
          symbol: 'C',
          type: 'temperature'
        }
      },
      warning: true
    },
    {
      "_id": "644dd35646fb5f611abbd384",
      "reads": [],
      model: '3000',
      type: 'Humedad',
      lastValue: 40,
      ReadingType: {
        name: 'Humedad',
        symbol: '%',

        MeasureType: {
          symbol: 'C',
          type: 'humidity'
        }
      },
      warning: false
    }
  ]

  const [socketsValues, setSocketsValues] = useState([]);

  const [socket, setSocket] = useState({});

  const handlePlantsHealth = () => {
    if (socketsValues) {
      const updatedSensors = sensors.map((sensor) => {
        const updated = socketsValues?.find(({ _id }) => sensor._id === _id);

        return {
          ...sensor,
          lastValue: updated?.lastValue || updated?.oldValue,
        };
      });

      if (plants && updatedSensors) {
        // Plants Health Indicators
        const plantsHealth = plants.map((plant) => ({
          plant,
          status: checkHealth(plant, updatedSensors),
        }));

        // setPlantsHealth(plantsHealth);

        // Sensors Indicators
        const sensorsIndicators = updatedSensors.map((sensorI) => {
          const { _id } = sensorI;

          return {
            ...sensorI,
            warning: plantsHealth.some((plant) =>
              plant.status.warnings.some((warn) => warn.sensorId === _id)
            ),
          };
        });

        if (sensorsIndicators) {
          // setSensorsIndicators(sensorsIndicators);
        }
      }
    }
  };

  // useEffect(() => {
  //   const handleSendWarningToServer = (data) => {
  //     socket.emit("socket_warning_register", JSON.stringify(data));
  //     console.log(JSON.stringify(data));
  //   };

  //   plantsHealth.forEach((plant) => {
  //     const { ok, warnings } = plant.status;
  //     if (!ok || warnings.length) {
  //       handleSendWarningToServer({
  //         sensorId: warnings[0].sensorId,
  //         plantId: plant._id,
  //       });
  //     }
  //   });
  // }, [socket, plantsHealth]);

  // useEffect(() => {
  //   handlePlantsHealth();
  // }, [socketsValues, plants, sensors]);

  // useEffect(() => {
  //   const socket = socketIOClient(process.env.REACT_APP_API_URL, {
  //     extraHeaders: {
  //       "access-control-allow-origin": "http://localhost:3000",
  //     },
  //   });
  //   socket.connect();

  //   socket.emit(
  //     "socket_zone_set",
  //     JSON.stringify({
  //       zoneId,
  //     })
  //   );

  //   socket.on("SensorMonitor", function (data) {
  //     let socketsData = JSON.parse(data);

  //     setSocketsValues(socketsData);
  //     setSocket(socket);
  //   });
  //   return () => {
  //     console.log("close sockets");
  //     socket.close();
  //   };
  // }, [zoneId]);

  // useEffect(() => {
  //   try {
  //     let sensorsIndicators = socketsValues;
  //     sensorsIndicators = sensorsIndicators.filter((sensorI) =>
  //       sensors.find((sensor) => sensorI._id === sensor._id)
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [socketsValues]);

//   ${
//    plantsHealth.some(({ status }) => status.warnings.length) && "error"
//  }
  return (
    <div className="zone_info">
      <div
        className={`card zone_info-card
        `}
      >
        <h2 className="text-center zone_info-card-title">Plants</h2>
        <div className="zone_info-card-content">
          <div>
            {!plantsHealth?.length ? (
              <h4>Loading </h4>
            ) : (
              plantsHealth?.map(({ plant, status }) => (
                <div
                  className="mb-5 animate__fadeInDown animate__animated"
                  key={plant._id}
                >
                  <h4>{plant.type}</h4>
                  <span
                    className={`zone_info-card-health health-${
                      status.ok
                        ? "good"
                        : status.health > 0
                        ? "warning"
                        : "danger"
                    }`}
                  >
                    Health:
                  </span>
                </div>
              ))
            )}
          </div>
          {plantsHealth?.length ? (
            <img
              className="zone_info-card-icon animate__fadeIn animate__animated"
              src="/plants.svg"
              alt="plants icon"
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <div
        className={`card zone_info-card ${
          plantsHealth?.some(({ status }) => status.warnings.length) && "error"
        }`}
      >
        <h2 className="text-center zone_info-card-title">Sensors</h2>

        <div className="zone_info-card-content">
          {!sensorsIndicators?.length ? (
            <h4>Loading </h4>
          ) : (
            sensorsIndicators.map((sensorI) => (
              <div
                className="zone_info-card-sensor-value animate__fadeIn animate__animated"
                key={sensorI._id}
              >
                <img
                  className="zone_info-card-icon"
                  src={
                    sensorI.ReadingType.MeasureType.type === "temperature"
                      ? "/global-warming.svg"
                      : "/clean-water.svg"
                  }
                  alt=""
                />
                <span
                  className={`zone_info-card-sensor ${
                    sensorI.warning ? "error" : ""
                  }`}
                >
                  {sensorI.lastValue}
                  <span className="zone_info-card-symbol">
                    {sensorI.lastValue ? sensorI.ReadingType.symbol : ""}
                  </span>
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
