import React from 'react'
import Card from '../Components/card';

const Dashboard = () => {
    return (
        <div className='app-dashboard'>
            <Card horizontal="left" vertical="top" lightId="1" DeviceName="Device 1"/>
            <Card horizontal="right" vertical="top" lightId="2" DeviceName="Device 2" />
            <Card horizontal="right" vertical="bottom" lightId="3" DeviceName="Device 3" />
            <Card horizontal="left" vertical="bottom" lightId="4" DeviceName="Device 4" />
        </div>
    );
}

export default Dashboard;