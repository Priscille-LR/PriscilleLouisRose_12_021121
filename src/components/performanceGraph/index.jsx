import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';
import './performanceGraph.css';

/**
 * @param {object} userPerformance
 * @returns user performance graph
 */

function PerformanceGraph({ userPerformance }) {
   const performance = userPerformance.data;

   return (
      <div className="performance-graph">
         <RadarChart
            data={performance}
            margin={{ top: 10, bottom: 10, right: 50, left: 50 }}
            outerRadius={80}
            width={270}
            height={270}
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
