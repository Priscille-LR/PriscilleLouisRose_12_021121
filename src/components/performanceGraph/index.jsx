import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';

import Service from '../../service/Service';
import MockedData from '../../dataSource/MockedData';
import './performanceGraph.css';

function PerformanceGraph() {
   const userPerformance = new Service(new MockedData()).getUserPerformance();

   return (
      <div className="performance-graph">
         <RadarChart
            outerRadius={100}
            width={270}
            height={270}
            data={userPerformance.data}
         >
            <PolarGrid />
            <PolarAngleAxis
               dataKey="kind"
               tick={{ fill: '#FFFFFF', fontSize: 12 }}
            />
            <Radar
               name="performance"
               dataKey="value"
               stroke="#FF0101"
               fill="#FF0101"
               fillOpacity={0.6}
            />
         </RadarChart>
      </div>
   );
}

export default PerformanceGraph;
