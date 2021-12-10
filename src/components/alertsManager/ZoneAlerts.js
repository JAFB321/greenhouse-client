import React, { useContext, useEffect, useState } from 'react'
import { getPlant } from '../../api/plantAPI';
import { getReadingType } from '../../api/readingTypeAPI';
import { AuthContext } from '../../auth/AuthContext';
import { ZoneAlert } from './ZoneAlert';

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@reach/disclosure";
import { CreateAlertForm } from './CreateAlertForm';

export const ZoneAlerts = ({ zone }) => {

    const { userAuth } = useContext(AuthContext);
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        
        (async () => {
           if(!zone?.alertParameters)return;

            const updatedAlerts = [];

            for (const alert of zone.alertParameters) {
                updatedAlerts.push({
                    ...alert,
                    plantName: (await getPlant(alert.plantID, userAuth?.token)).data.name,
                    readingTypeName: (await getReadingType(alert.readingTypeID, userAuth?.token)).data.name
                });
            }

            setAlerts(updatedAlerts);
        })();

    }, [zone])   


    if(!zone) return (<div></div>);
    
    return (
			<div>
				{zone.alertParameters && alerts.length ? (
					<div>
						{alerts.map((alert, i) => (
							<ZoneAlert key={i} i={i} alert={alert} />
						))}
					</div>
				) : (
					""
				)}

				<Disclosure>
					<DisclosureButton className="alert-create-open btn">
						Create alert
					</DisclosureButton>
					<DisclosurePanel>
						<CreateAlertForm zone={zone} zoneID={zone._id} />
					</DisclosurePanel>
				</Disclosure>
			</div>
		);
}
