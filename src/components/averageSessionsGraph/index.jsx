import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';

import Service from '../../service/Service';
import MockedData from '../../dataSource/MockedData';
import './averageSessionsGraph.css';

function AverageSessionsGraph() {
   const userAverageSessions = new Service(
      new MockedData()
   ).getUserAverageSessions();
   console.log(userAverageSessions);

   return <div className="average-sessions-graph"></div>;
}

export default AverageSessionsGraph;
