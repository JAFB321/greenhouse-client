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
    const [zones, setZones] = useState([]);

    // Load all zones
    useEffect(() => {
        
        (async () => {
            const zones = await getZones(userAuth?.token);
            if(zones.data) {
                setZones(zones.data);
            }
        })();

    }, []);

    // On zone selected
    useEffect(() => {

        if(zoneID === 'default') return;
        console.log(zoneID);
        
    }, [zoneID]);

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
