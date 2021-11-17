import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';

import Service from '../../service/Service';
import MockedData from '../../dataSource/MockedData';
import './scoreGraph.css';

function ScoreGraph() {
   const userInfo = new Service(new MockedData()).getUserInfo();
   console.log(userInfo);
   const data = [
      { value: userInfo.todayScore * 100, fill: '#FF0000' },
      //   { value: 100 - userInfo.todayScore },
   ];

   return (
      <div className="score-graph">
         <div className="score-graph__title">Score</div>
         <div className="score-graph__content">
            <span className="score">
               {userInfo.todayScore * 100}% <br />{' '}
            </span>
            de votre objectif
         </div>
         <RadialBarChart
            data={data}
            width={270}
            height={270}
            innerRadius={80}
            outerRadius={100}
            barSize={10}
            background={{ fill: 'white' }}
            // startAngle={90} deprecated
            // endAngle={450}
         >
            <PolarAngleAxis
               type="number"
               domain={[0, 100]}
               angleAxisId={0}
               tick={false}
            />
            <RadialBar
               dataKey="value"
               cornerRadius={10}
               background
               //    background={{ fill: '#fbfbfb' }}
               clockwise
            />
         </RadialBarChart>

         {/* <PieChart
            width={270}
            height={270}
            margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
         >
            <Pie
               data={data}
               dataKey="value"
               innerRadius={70}
               outerRadius={80}
               startAngle={90}
               endAngle={450}
               fill="#FF0000"
               tickLine={false}
            >
               {<Cell key={`cell-0`} fill="#FF0000" />}
               {<Cell key={`cell-1`} fill="#fbfbfb" />}
            </Pie>
         </PieChart> */}
      </div>
   );
}

export default ScoreGraph;
