import PropTypes from 'prop-types';
import './graphs.css';
import Macros from '../macros';
import PerformanceGraph from '../performanceGraph';
import ActivityGraph from '../activityGraph';
import AverageSessionsGraph from '../averageSessionsGraph';
import ScoreGraph from '../scoreGraph';

function Graphs() {
   return (
      <div className="graphs-wrapper">
         <ActivityGraph />
         <AverageSessionsGraph />
         <PerformanceGraph />
         <ScoreGraph />
         <Macros />
      </div>
   );
}

export default Graphs;
