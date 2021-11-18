import PropTypes from 'prop-types';
import './graphs.css';
import Macros from '../macros';
import PerformanceGraph from '../performanceGraph';
import ActivityGraph from '../activityGraph';
import AverageSessionsGraph from '../averageSessionsGraph';
import ScoreGraph from '../scoreGraph';

function Graphs(props) {
   return (
      <div className="graphs-wrapper">
         <ActivityGraph userId={props.userId} />
         <AverageSessionsGraph userId={props.userId} />
         <PerformanceGraph userId={props.userId} />
         <ScoreGraph userId={props.userId} />
         <Macros userId={props.userId} />
      </div>
   );
}

export default Graphs;
