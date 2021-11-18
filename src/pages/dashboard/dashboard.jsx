import PropTypes from 'prop-types';
import Greeting from '../../components/greeting';
import Graphs from '../../components/graphs';
import './dashboard.css';

function Dashboard(props) {
   console.log(props.userId);
   return (
      <div className="dashboard">
         <Greeting userId={props.userId} />
         <Graphs userId={props.userId} />
      </div>
   );
}

export default Dashboard;
