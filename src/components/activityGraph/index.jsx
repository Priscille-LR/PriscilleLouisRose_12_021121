import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';

import Service from '../../service/Service';
import MockedData from '../../dataSource/MockedData';
import './activityGraph.css';

function ActivityGraph() {
   const userActivity = new Service(new MockedData()).getUserActivity();
   console.log(userActivity);

   return <div className="performance-graph"></div>;
}

export default ActivityGraph;
