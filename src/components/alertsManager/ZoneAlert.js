import React from 'react'

export const ZoneAlert = ({alert, i}) => {
    return (
        <details>
            <summary className="alert-summary">
                Alert {i + 1}
                <div className="alert-summary-item">🌱{' '}{alert.plantName}</div>
                <div className="alert-summary-item">📋{' '}{alert.readingTypeName}</div>
            </summary>

            <div className="alert-details-info"><b>🔹 Minimum value: </b>{alert.minValue}</div>
            <div className="alert-details-info"><b>🔸 Maximum value:</b> {alert.maxValue}</div>
            <div className="alert-details-info"><b>🔥 Danger level:</b> {alert.dangerLevel}</div>
            
            <div className="alert-details-info"><b>🚧 Notifications:</b> 
            { alert?.notifications?.email ?
                <div className="alert-details-notifications">email</div>
                : ''}
                { alert.notifications.web  ?
                <div className="alert-details-notifications">web</div>
                : ''}
                </div>
        </details>
    )
}
