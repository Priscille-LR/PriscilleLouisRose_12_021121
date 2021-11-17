import React, { PureComponent, useState } from 'react';
import {
   LineChart,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Line,
} from 'recharts';
import PropTypes from 'prop-types';

import Service from '../../service/Service';
import MockedData from '../../dataSource/MockedData';
import './averageSessionsGraph.css';

function AverageSessionsGraph() {
   const userAverageSessions = new Service(
      new MockedData()
   ).getUserAverageSessions();
   console.log(userAverageSessions);

   const [focusBar, setFocusBar] = useState(null);

   return (
      <div className="average-sessions-graph">
         <div className="average-sessions-graph__title">
            Durée moyenne des sessions
         </div>
         <LineChart
            width={270}
            height={270}
            data={userAverageSessions.sessions}
            margin={{ top: 50, right: 20, left: 20, bottom: 5 }}
            onMouseMove={(state) => {
               if (state.isTooltipActive) {
                  setFocusBar(state.activeTooltipIndex);
               } else {
                  setFocusBar(null);
               }
            }}
         >
            <CartesianGrid strokeDasharray="1" horizontal="" vertical="" />
            <XAxis
               dataKey="day"
               tickLine={false}
               axisLine={false}
               tick={{ fill: '#FFFFFF' }}
            />
            {/* <YAxis fill={focusBar === index ? "E62200" : "rgba(230, 34, 0, 0.2)"} />}
/> */}
            <Tooltip
               itemStyle={{
                  color: 'black',
               }}
               formatter={(value, name, unit) => [value, unit]}
               labelStyle={{ display: 'none' }}
            />

            <Line
               type="monotone"
               dataKey="sessionLength"
               stroke="white"
               strokeWidth={2}
               unit="min"
               dot={false}
               activeDot={{ r: 5 }}
            />
         </LineChart>
      </div>
   );
}

export default AverageSessionsGraph;
