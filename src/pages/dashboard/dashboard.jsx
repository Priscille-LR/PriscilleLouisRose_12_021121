import PropTypes from 'prop-types';
import Greeting from '../../components/greeting';
import Graphs from '../../components/graphs';
import './dashboard.css';

function Dashboard() {
   return (
      <div className="dashboard">
         <Greeting />
         <Graphs />
      </div>
   );
}

export default Dashboard;
