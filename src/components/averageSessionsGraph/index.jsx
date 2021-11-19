import React, { PureComponent } from 'react';
import {
   ResponsiveContainer,
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
import { useState, useEffect } from 'react';
import DataFromAPI from '../../dataSource/DataFromAPI';
import './averageSessionsGraph.css';

function AverageSessionsGraph(props) {
   const [userAverageSessions, setUserAverageSessions] = useState([]);
   const [isDataLoading, setDataLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      async function fetchUserAverageSessions() {
         setDataLoading(true);
         try {
            const userAverageSessions = await new Service(
               new DataFromAPI()
            ).getUserAverageSessions(props.userId);
            console.log(userAverageSessions);
            setUserAverageSessions(userAverageSessions);
         } catch {
            console.log('ERROR ERROR', error);
            setError(true);
         } finally {
            setDataLoading(false);
         }
      }
      fetchUserAverageSessions();
   }, []);

   // const [focusBar, setFocusBar] = useState(null);

   return (
      <div className="average-sessions-graph">
         <div className="average-sessions-graph__title">
            Durée moyenne des sessions
         </div>
         {/* <ResponsiveContainer> */}
         <LineChart
            data={userAverageSessions.sessions}
            width={270}
            height={270}
            // margin={{ top: 80, right: 20, left: 20, bottom: 5 }}
            margin={{ top: 0, right: 0, left: 0, bottom: -10 }}

            // onMouseMove={(state) => {
            //    if (state.isTooltipActive) {
            //       setFocusBar(state.activeTooltipIndex);
            //    } else {
            //       setFocusBar(null);
            //    }
            // }}
         >
            <CartesianGrid strokeDasharray="1" horizontal="" vertical="" />
            <XAxis
               dataKey="day"
               tickLine={false}
               axisLine={false}
               tick={{ fill: '#FFFFFF' }}
               padding={{ left: 15, right: 15 }}
            />

            <YAxis
               hide={true}
               domain={['dataMin-20', 'dataMax+40']}
               tickLine={false}
               axisLine={false}
            />

            <Tooltip
               itemStyle={{
                  color: 'black',
               }}
               formatter={(value, name, unit) => [value, unit]}
               labelStyle={{ display: 'none' }}
               cursor={{
                  stroke: 'black',
                  strokeOpacity: 0.1,
                  strokeWidth: 70,
               }}
            />

            <Line
               type="monotone"
               dataKey="sessionLength"
               stroke="white"
               strokeWidth={2}
               unit="min"
               dot={false}
               activeDot={{
                  fill: 'white',
                  stroke: 'white',
                  strokeOpacity: 0.2,
                  strokeWidth: 15,
                  r: 5,
               }}
            />
         </LineChart>
         {/* </ResponsiveContainer> */}
      </div>
   );
}

export default AverageSessionsGraph;
