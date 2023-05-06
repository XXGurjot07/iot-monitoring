import React from 'react'
import Card from '../Components/card';

const Dashboard = () => {
    return (
        <div className='app-dashboard'>
            <Card horizontal="left" vertical="top" lightId="1" />
            <Card horizontal="left" vertical="bottom" lightId="2" />
            <Card horizontal="right" vertical="top" lightId="3" />
            <Card horizontal="right" vertical="bottom" lightId="4" />
        </div>
    );
}

export default Dashboard;