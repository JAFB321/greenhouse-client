import React, {useContext, useEffect, useState} from 'react'
import { MonitorHeader } from '../monitor/MonitorHeader'
import { Listbox, ListboxOption } from "@reach/listbox";
import "@reach/listbox/styles.css";

import {getZones} from '../../api/zonesAPI';
import { AuthContext } from '../../auth/AuthContext';
import { ZoneAlerts } from './ZoneAlerts';


export const AlertsManager = () => {

    const { userAuth } = useContext(AuthContext);

    let [zoneID, setZoneID] = useState("default");
    // const [zones, setZones] = useState([]);

    const zones = [
        {
          "_id": "644dc8491930b38503ae563a",
          "name": "Verduras transgenico",
          "sensors": [
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
              },
          ]
        }
      ]

    // Load all zones
    // useEffect(() => {
        
    //     (async () => {
    //         const zones = await getZones(userAuth?.token);
    //         if(zones.data) {
    //             setZones(zones.data);
    //         }
    //     })();

    // }, []);

    // // On zone selected
    // useEffect(() => {

    //     if(zoneID === 'default') return;
    //     console.log(zoneID);
        
    // }, [zoneID]);

    return (
			<div>
				<MonitorHeader title="Alerts Manager" />


				<div>
					<Listbox value={zoneID} onChange={(value) => setZoneID(value)} >
						<ListboxOption value="default">
                            Choose a zone 🌱
                        </ListboxOption>
						<hr />
						{zones.map((zone) => (
							<ListboxOption 
                            key={zone._id} 
                            value={zone._id} 
                            valueText={zone._id} >
								{zone.name}
							</ListboxOption>
						))}
					</Listbox>
				</div>

                <ZoneAlerts zone={zones.find(zone => zone._id === zoneID)} />
			</div>
		);
}
