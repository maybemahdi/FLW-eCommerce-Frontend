"use client"
import React from 'react';
import Stats from './Stats/Stats';
import dummyStats from '@/dummy-data/dummyStats';
import EarningReport from './EarningReport/EarningReport';

const DashboardPage = () => {
    return (
        <div className="space-y-6">
            <Stats stats={dummyStats} />
            <EarningReport />
        </div>
    );
};

export default DashboardPage;