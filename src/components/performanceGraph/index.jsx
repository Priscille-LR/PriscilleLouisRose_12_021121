import React, { PureComponent } from 'react';
import {
   ResponsiveContainer,
   Radar,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
} from 'recharts';
import PropTypes from 'prop-types';
import './performanceGraph.css';

function PerformanceGraph(props) {
   return (
      <div className="performance-graph">
         {/* <ResponsiveContainer> */}
         <RadarChart
            data={props.userPerformance.data}
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
         {/* </ResponsiveContainer> */}
      </div>
   );
}

export default PerformanceGraph;
