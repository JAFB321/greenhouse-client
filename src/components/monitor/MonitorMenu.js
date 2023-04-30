import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

import { AuthContext } from "../../auth/AuthContext";
import { MonitorHeader } from "../../components/monitor/MonitorHeader";
import { ZoneCard } from "./ZoneCard";

export const MonitorMenu = () => {
  // const [zones, setZones] = useState([]);
  // const [, setError] = useState({});
  // // console.log(zones);
  // const { userAuth } = useContext(AuthContext);

  // useEffect(() => {
  //   const getZones = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${process.env.REACT_APP_API_URL}/api/zone?populated=true`,
  //         {
  //           headers: {
  //             token: userAuth?.token,
  //           },
  //         }
  //       );
  //       console.log(data);
  //       if (data?.data?.length) {
  //         const { data: zones } = data;
  //         console.log(zones);
  //         setZones(zones);
  //         setError(false);
  //       } else setError(true);
  //     } catch (error) {
  //       setError(true);
  //     }
  //   };

  //   getZones();
  // }, []);

  const zones = [{
    "_id": "644dc8491930b38503ae563a",
    "name": "Verduras transgenico",
    "sensors": [
      {
        "_id": "644dd35646fb5f611abbd384",
        "reads": [],
        model: 'C-23',
        type: 'Temperatura',
        readingType: {
          name: 'Temperatura',
          measureType: {
            symbol: 'C',
          type: 'temperature'
          }
        }
      }
    ],
    "alertParameters": [],
    "plants": [
      {
        "_id": "644dd35646fb5f611abbd385",
        imageURL:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Tomate_2008-2-20.JPG',
        type: 'Tomate'
      },
      {
        "_id": "644dd35646fb5f611abbd386",
        imageURL:'https://www.animalgourmet.com/wp-content/uploads/2019/04/onion-1565604_1920.jpg',
        type: 'Cebolla'
         }
    ]
  }]

  return (
    <>
      <MonitorHeader title="Greenhouse Monitor" />

      <div className="zone_card-grid">
        {zones.map(({ _id: zoneId, name, plants, sensors }) => (
          <ZoneCard
            zoneId={zoneId}
            name={name}
            plants={plants}
            sensors={sensors}
          />
        ))}
      </div>
    </>
  );
};
