import PropTypes from 'prop-types';
import Greeting from '../../components/greeting';
import Graphs from '../../components/graphs';
import './dashboard.css';
import { useState, useEffect, useContext } from 'react';
import Service from '../../service/Service';
import MockedData from '../../dataSource/MockedData';
import DataFromAPI from '../../dataSource/DataFromAPI';
import { SourceContext } from '../../utils/context';
import Error from '../../utils/error';
import Loader from '../../utils/loader';

function Dashboard(props) {
   // const [userInfo, setUserInfo] = useState({});
   // const [userActivity, setUserActivity] = useState([]);
   // const [userPerformance, setUserPerformance] = useState([]);
   // const [userAverageSessions, setUserAverageSessions] = useState([]);

   const [data, setData] = useState({});
   const [isDataLoading, setDataLoading] = useState(true);
   const [error, setError] = useState(null);

   const { source } = useContext(SourceContext);
   console.log(source);

   useEffect(() => {
      async function fetchUserActivity() {
         setDataLoading(true);
         try {
            console.log(source);
            const service = new Service(
               source === 'mock' ? new MockedData() : new DataFromAPI()
            );
            // const service = new Service();
            const userInfo = await service.getUserInfo(props.userId);
            const userPerformance = await service.getUserPerformance(
               props.userId
            );
            const userActivity = await service.getUserActivity(props.userId);
            const userAverageSessions = await service.getUserAverageSessions(
               props.userId
            );

            const data = {
               userInfo: userInfo,
               userPerformance: userPerformance,
               userActivity: userActivity,
               userAverageSessions: userAverageSessions,
            };

            setData(data);
         } catch {
            console.log('ERROR ERROR', error);
            setError(true);
         } finally {
            setDataLoading(false);
         }
      }
      fetchUserActivity();
   }, [source]);

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

   // return (
   //    <div className="loader-wrapper">
   //       {' '}
   //       <Loader />{' '}
   //    </div>
   // );
}

export default Dashboard;
