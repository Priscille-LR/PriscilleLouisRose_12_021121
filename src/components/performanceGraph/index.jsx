import React from 'react';
import {
   Radar,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import './performanceGraph.css';

/**
 * @param {object} userPerformance
 * @returns user performance graph
 */

function PerformanceGraph({ userPerformance }) {
   const performance = userPerformance.data;

   const startAngle = 210;

   return (
      <div className="performance-graph">
         <ResponsiveContainer width="99%" height={280}>
            <RadarChart
               data={performance}
               outerRadius={65}
               startAngle={startAngle}
               endAngle={startAngle + 360}
            >
               <PolarGrid />
               <PolarAngleAxis
                  dataKey="kind"
                  tick={{ fill: 'white', fontSize: 12, fontWeight: 500 }}
                  tickSize={10}
               />
               <Radar
                  name="performance"
                  dataKey="value"
                  stroke="#FF0101"
                  fill="#FF0101"
                  fillOpacity={0.7}
               />
            </RadarChart>
         </ResponsiveContainer>
      </div>
   );
}

PerformanceGraph.propTypes = {
   userPerformance: PropTypes.shape({
      data: PropTypes.arrayOf(
         PropTypes.shape({
            value: PropTypes.number.isRequired,
            kind: PropTypes.string.isRequired,
         })
      ),
   }).isRequired,
};

export default PerformanceGraph;
