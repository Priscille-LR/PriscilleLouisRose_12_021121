import PropTypes from 'prop-types';
import './graphs.css';
import Macros from '../macros';
import PerformanceGraph from '../performanceGraph';
import ActivityGraph from '../activityGraph';
import AverageSessionsGraph from '../averageSessionsGraph';

function Graphs() {
   return (
      <div className="graphs-wrapper">
         <ActivityGraph />
         <AverageSessionsGraph />
         <PerformanceGraph />
         <Macros />
      </div>
   );
}

export default Graphs;
