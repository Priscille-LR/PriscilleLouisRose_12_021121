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
         <ActivityGraph userActivity={props.data.userActivity} />
         <AverageSessionsGraph
            userAverageSessions={props.data.userAverageSessions}
         />
         <PerformanceGraph userPerformance={props.data.userPerformance} />
         <ScoreGraph userInfo={props.data.userInfo} />
         <Macros userInfo={props.data.userInfo} />
      </div>
   );
}

export default Graphs;
