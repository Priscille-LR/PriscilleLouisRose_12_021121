import PropTypes from 'prop-types';
import './greeting.css';
import Service from '../../service/Service';
import MockedData from '../../dataSource/MockedData';

function Greeting() {
   const userInfo = new Service(new MockedData()).getUserInfo();

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
