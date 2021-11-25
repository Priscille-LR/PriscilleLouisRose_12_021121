import React from 'react';
import {
   BarChart,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Legend,
   Bar,
   ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import './activityGraph.css';

/**
 * @param {object} userActivity
 * @returns user activity graph
 */

function ActivityGraph({ userActivity }) {
   const contentStyle = { color: '#74798c', fontSize: '14px' };
   const sessions = userActivity.sessions;

   const renderLegend = (value) => {
      return <span style={contentStyle}>{value}</span>;
   };

   return (
      <div className="activity-graph">
         <div className="activity-graph__title">Activité quotidienne</div>
         <ResponsiveContainer>
            <BarChart
               data={sessions}
               width={830}
               height={320}
               margin={{ top: 60, right: 20, left: 20, bottom: 20 }}
               style={contentStyle}
            >
               <CartesianGrid
                  strokeDasharray="2 2"
                  horizontal={true}
                  vertical={false}
                  stroke="#DEDEDE"
               />
               <XAxis
                  dataKey="day"
                  tick={{ fill: '#9B9EAC' }}
                  tickLine={false}
                  tickSize={15}
                  stroke="#DEDEDE"
               />

               <YAxis yAxisId="left" orientation="left" hide={true} />
               <YAxis
                  yAxisId="right"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tickSize={30}
                  domain={['dataMin - 5', 'dataMax + 5']}
                  stroke="#9B9EAC"
               />
               <Tooltip
                  contentStyle={{
                     backgroundColor: '#E60000',
                  }}
                  itemStyle={{
                     color: 'white',
                  }}
                  labelStyle={{ display: 'none' }}
                  formatter={(value, name, unit) => [value, unit]}
               />
               <Legend
                  align="right"
                  verticalAlign="top"
                  iconType="circle"
                  iconSize={12}
                  height={60}
                  formatter={renderLegend}
                  // margin={{ top: 20, left: 20, right: 20, bottom: 20 }}
               />
               <Bar
                  yAxisId="right"
                  dataKey="kilogram"
                  fill="#282D30"
                  name="Poids (kg)"
                  unit="kg"
                  barSize={10}
                  radius={[10, 10, 0, 0]}
               />
               <Bar
                  yAxisId="left"
                  dataKey="calories"
                  fill="#E60000"
                  name="Calories brûlées (kcal)"
                  unit="kcal"
                  barSize={10}
                  radius={[10, 10, 0, 0]}
               />
            </BarChart>
         </ResponsiveContainer>
      </div>
   );
}

ActivityGraph.propTypes = {
   userActivity: PropTypes.shape({
      sessions: PropTypes.arrayOf(
         PropTypes.shape({
            day: PropTypes.number.isRequired,
            kilogram: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired,
         })
      ),
   }).isRequired,
};

export default ActivityGraph;
