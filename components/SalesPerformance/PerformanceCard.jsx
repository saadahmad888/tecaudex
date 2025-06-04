import React from 'react'

const PerformanceCard = () => {
    return (
        <div className="performanceCard">
            <p className="CardTitle">
                Quarterly Sales
            </p>
            <p className="cardNumber">
                $250,000
            </p>
            <p className="performanceStatus">
                Last Quarter <span>+15%</span>
            </p>
        </div>
    )
}

export default PerformanceCard