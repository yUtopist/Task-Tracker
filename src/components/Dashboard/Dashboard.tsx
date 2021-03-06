import React from 'react';
import ReactDOM from 'react-dom'
import './Dashboard.css';
import { dashboardData } from './DashboardData';

const Dashboard = () => {
  // some fetch for DashboardData

  return (
    <div className='Dashboard'>
      {
        dashboardData.map((e: any) => {
          const Tab = e.type
          return <Tab data={e} />
        })
      }
    </div>
  )
}

export default Dashboard;