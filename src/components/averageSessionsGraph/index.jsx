import React from 'react';
import {
   LineChart,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Line,
} from 'recharts';
import PropTypes from 'prop-types';
import './averageSessionsGraph.css';

/**
 * @param {object} userAverageSessions
 * @returns user average sessions graph
 */

function AverageSessionsGraph({ userAverageSessions }) {
   const sessions = userAverageSessions.sessions;

   return (
      <div className="average-sessions-graph">
         <div className="average-sessions-graph__title">
            Durée moyenne des sessions
         </div>
         <LineChart
            data={sessions}
            width={270}
            height={270}
            margin={{ top: 0, right: 0, left: 0, bottom: -10 }}
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
                  height: 100,
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
      </div>
   );
}

AverageSessionsGraph.propTypes = {
   userAverageSessions: PropTypes.shape({
      sessions: PropTypes.arrayOf(
         PropTypes.shape({
            day: PropTypes.string.isRequired,
            sessionLength: PropTypes.number.isRequired,
         })
      ),
   }).isRequired,
};

export default AverageSessionsGraph;
