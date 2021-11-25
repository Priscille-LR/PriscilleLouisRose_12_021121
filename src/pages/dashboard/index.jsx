import { useState, useEffect, useContext } from 'react';
import { SourceContext } from '../../utils/context';
import Service from '../../service/Service';
import MockedData from '../../dataSource/MockedData';
import DataFromAPI from '../../dataSource/DataFromAPI';
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

   const { source } = useContext(SourceContext);

   useEffect(() => {
      async function fetchUserActivity() {
         setDataLoading(true);
         try {
            const service = new Service(
               source === 'mock' ? new MockedData() : new DataFromAPI()
            );

            const userInfo = await service.getUserInfo(userId);
            const userPerformance = await service.getUserPerformance(userId);
            const userActivity = await service.getUserActivity(userId);
            const userAverageSessions = await service.getUserAverageSessions(
               userId
            );

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
   }, [source, userId, error]);

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
