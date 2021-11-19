import React, { PureComponent } from 'react';
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
import Service from '../../service/Service';
import MockedData from '../../dataSource/MockedData';
import DataFromAPI from '../../dataSource/DataFromAPI';
import { useState, useEffect } from 'react';

import './activityGraph.css';

function ActivityGraph(props) {
   const [userActivity, setUserActivity] = useState([]);
   const [isDataLoading, setDataLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      async function fetchUserActivity() {
         setDataLoading(true);
         try {
            const userActivity = await new Service(
               new DataFromAPI()
            ).getUserActivity(props.userId);
            console.log(userActivity);
            setUserActivity(userActivity);
         } catch {
            console.log('ERROR ERROR', error);
            setError(true);
         } finally {
            setDataLoading(false);
         }
      }
      fetchUserActivity();
   }, []);

   const contentStyle = { color: '#74798c', fontSize: '14px' };
   const renderLegend = (value) => {
      return <span style={contentStyle}>{value}</span>;
   };

   return (
      <div className="activity-graph">
         <div className="activity-graph__title">Activité quotidienne</div>
         <ResponsiveContainer>
            <BarChart
               data={userActivity.sessions}
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
                  domain={['dataMin - 5', 'dataMax + 8']}
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
                  height={76}
                  formatter={renderLegend}
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

export default ActivityGraph;
