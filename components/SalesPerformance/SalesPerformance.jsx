import React from 'react'
import PerformanceCard from './PerformanceCard'
import "./SalesPerformance.css"

const SalesPerformance = () => {
    return (
        <div>
            <div className="sectionTitle">
                <h2>
                    Sales Performance
                </h2>
            </div>
            <div className="PermformanceBox">
                <PerformanceCard />
            </div>
        </div>
    )
}

export default SalesPerformance