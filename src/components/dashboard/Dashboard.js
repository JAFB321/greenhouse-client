import React from 'react'
import { MonitorHeader } from '../monitor/MonitorHeader'
import { DoughnutChart } from './charts/DoughnutChart'
import { MultiLineChart } from './charts/MultiLineChart'
import { RadarChart } from './charts/RadarChart'
import { StackBarChart } from './charts/StackBarChart'
import { MultiOverheatingChart } from './examples/MultiOverheatingChart'
import { OverheatingChart } from './examples/OverheatingChart'

export const Dashboard = () => {
    
    
    
    return (
        <div className="dashboard-wrapper">
            <MonitorHeader title="Dashboard" />
            <MultiOverheatingChart />
            <MultiLineChart />
            <DoughnutChart />
            <RadarChart />
            <OverheatingChart />
        </div>
    )
}
