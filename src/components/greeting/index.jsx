import PropTypes from 'prop-types';
import './greeting.css';
import Service from '../../service/Service';
import MockedData from '../../dataSource/MockedData';
import DataFromAPI from '../../dataSource/DataFromAPI';
import { useState, useEffect } from 'react';

function Greeting(props) {
   const [userInfo, setUserInfo] = useState();
   const [isDataLoading, setDataLoading] = useState(false);
   //const [error, setError] = useState(null);
   console.log(props.userId);

   useEffect(() => {
      async function fetchUserInfo() {
         setDataLoading(true);
         try {
            const userInfoFromService = await new Service(
               new DataFromAPI()
            ).getUserInfo(props.userId);
            console.log(userInfoFromService);
            setUserInfo(userInfoFromService);
         } catch (exception) {
            console.log('ERROR ERROR', exception);
            //setError(true);
         } finally {
            setDataLoading(false);
         }
      }
      fetchUserInfo();
   }, []);

   if (userInfo === undefined) {
      return <div className="macros-wrapper"></div>;
   }

   return (
      <div className="greeting">
         <h1>
            Bonjour <span className="user">{userInfo.getUserName()}</span>
         </h1>
         <p>Félicitations, tu as explosé tes objectifs hier ! 👏 </p>
      </div>
   );
}

export default Greeting;
