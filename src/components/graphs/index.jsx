import PropTypes from 'prop-types';
import './graphs.css';
import Macros from '../macros';
import PerformanceGraph from '../performanceGraph';
import ActivityGraph from '../activityGraph';
import AverageSessionsGraph from '../averageSessionsGraph';
import ScoreGraph from '../scoreGraph';

function Graphs({ data }) {
   return (
      <div className="graphs-wrapper">
         <ActivityGraph userActivity={data.userActivity} />
         <AverageSessionsGraph userAverageSessions={data.userAverageSessions} />
         <PerformanceGraph userPerformance={data.userPerformance} />
         <ScoreGraph userInfo={data.userInfo} />
         <Macros userInfo={data.userInfo} />
      </div>
   );
}

Graphs.propTypes = {
   data: PropTypes.shape({
      userActivity: PropTypes.object.isRequired,
      userAverageSessions: PropTypes.object.isRequired,
      userPerformance: PropTypes.object.isRequired,
      userInfo: PropTypes.object.isRequired,
   }).isRequired,
};

export default Graphs;
