import React, { PureComponent } from 'react';
import {
   BarChart,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Legend,
   Bar,
} from 'recharts';
import PropTypes from 'prop-types';

import Service from '../../service/Service';
import MockedData from '../../dataSource/MockedData';
import './activityGraph.css';

function ActivityGraph() {
   const userActivity = new Service(new MockedData()).getUserActivity();
   console.log(userActivity);

   const contentStyle = { color: '#74798c', fontSize: '14px' };
   const renderLegend = (value) => {
      return <span style={contentStyle}>{value}</span>;
   };

   return (
      <div className="activity-graph">
         <div className="activity-graph__title">Activité quotidienne</div>
         <BarChart
            data={userActivity.sessions}
            width={830}
            height={320}
            margin={{ top: 50, right: 20, left: 20, bottom: 40 }}
            style={contentStyle}
         >
            <CartesianGrid
               strokeDasharray="2 "
               horizontal={true}
               vertical={false}
            />
            <XAxis dataKey="day" tickLine={false} tickSize={15} />
            <YAxis
               // dataKey="kilogram"
               orientation="right"
               axisLine={false}
               tickLine={false}
               tickSize={30}
               // domain={['dataMin - 5', 'dataMax + 5']}
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
               dataKey="kilogram"
               fill="#282D30"
               name="Poids (kg)"
               unit="kg"
               barSize={10}
               radius={[10, 10, 0, 0]}
            />
            <Bar
               dataKey="calories"
               fill="#E60000"
               name="Calories brûlées (kcal)"
               unit="kcal"
               barSize={10}
               radius={[10, 10, 0, 0]}
            />
         </BarChart>
      </div>
   );
}

export default ActivityGraph;
