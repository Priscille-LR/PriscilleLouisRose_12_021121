import React, { PureComponent } from 'react';
import {
   ResponsiveContainer,
   Radar,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
} from 'recharts';
import PropTypes from 'prop-types';

import Service from '../../service/Service';
import MockedData from '../../dataSource/MockedData';
import { useState, useEffect } from 'react';
import './performanceGraph.css';
import DataFromAPI from '../../dataSource/DataFromAPI';

function PerformanceGraph(props) {
   const [userPerformance, setUserPerformance] = useState([]);
   const [isDataLoading, setDataLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      async function fetchUserPerformance() {
         setDataLoading(true);
         try {
            const userPerformance = await new Service(
               new DataFromAPI()
            ).getUserPerformance(props.userId);
            console.log(userPerformance);
            setUserPerformance(userPerformance);
         } catch {
            console.log('ERROR ERROR', error);
            setError(true);
         } finally {
            setDataLoading(false);
         }
      }
      fetchUserPerformance();
   }, []);

   return (
      <div className="performance-graph">
         {/* <ResponsiveContainer> */}
         <RadarChart
            data={userPerformance.data}
            margin={{ top: 10, bottom: 10, right: 50, left: 50 }}
            outerRadius={80}
            width={270}
            height={270}
         >
            <PolarGrid />
            <PolarAngleAxis
               dataKey="kind"
               tick={{ fill: 'white', fontSize: 12, fontWeight: 500 }}
               tickSize={10}
            />
            <Radar
               name="performance"
               dataKey="value"
               stroke="#FF0101"
               fill="#FF0101"
               fillOpacity={0.7}
            />
         </RadarChart>
         {/* </ResponsiveContainer> */}
      </div>
   );
}

export default PerformanceGraph;
