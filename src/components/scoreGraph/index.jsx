import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';
import './scoreGraph.css';

/**
 * @param {object} userInfo
 * @returns user score graph
 */

function ScoreGraph({ userInfo }) {
   const todayScore = userInfo.todayScore;
   const score = [{ value: todayScore * 100, fill: '#FF0000' }];

   return (
      <div className="score-graph">
         <div className="score-graph__title">Score</div>
         <div className="score-graph__content">
            <span className="score">
               {todayScore * 100}% <br />{' '}
            </span>
            de votre objectif
         </div>
         <RadialBarChart
            data={score}
            width={270}
            height={270}
            innerRadius={80}
            outerRadius={100}
            barSize={10}
            background={{ fill: 'white' }}
            startAngle={90}
            deprecated
            endAngle={450}
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
      </div>
   );
}

ScoreGraph.propTypes = {
   userInfo: PropTypes.shape({
      todayScore: PropTypes.number.isRequired,
   }).isRequired,
};

export default ScoreGraph;
