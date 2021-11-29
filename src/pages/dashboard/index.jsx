import { useState, useEffect } from 'react';
import { dependencies } from '../../service/Dependencies';
import Greeting from '../../components/greeting';
import Graphs from '../../components/graphs';
import Error from '../../utils/error';
import Loader from '../../utils/loader';
import PropTypes from 'prop-types';
import './dashboard.css';

function Dashboard({ userId }) {
   // const [userInfo, setUserInfo] = useState({});
   // const [userActivity, setUserActivity] = useState([]);
   // const [userPerformance, setUserPerformance] = useState([]);
   // const [userAverageSessions, setUserAverageSessions] = useState([]);

   const [data, setData] = useState({});
   const [isDataLoading, setDataLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      async function fetchUserActivity() {
         setDataLoading(true);
         try {
            const userInfo = await dependencies.userService.getUserInfo(userId);
            const userPerformance =
               await dependencies.userService.getUserPerformance(userId);
            const userActivity = await dependencies.userService.getUserActivity(
               userId
            );
            const userAverageSessions =
               await dependencies.userService.getUserAverageSessions(userId);

            const data = {
               userInfo: userInfo,
               userPerformance: userPerformance,
               userActivity: userActivity,
               userAverageSessions: userAverageSessions,
            };

            setData(data);
         } catch {
            console.log('ERROR : ', error);
            setError(true);
         } finally {
            setDataLoading(false);
         }
      }
      fetchUserActivity();
   }, [userId, error]);

   if (error) {
      return (
         <div className="error-wrapper">
            <Error />
         </div>
      );
   }

   return isDataLoading ? (
      <div className="loader-wrapper">
         <Loader />
      </div>
   ) : (
      <div className="dashboard">
         <Greeting userName={data.userInfo.getUserName()} />
         <Graphs data={data} />
      </div>
   );
}

Dashboard.propTypes = {
   userId: PropTypes.string.isRequired,
};

export default Dashboard;
