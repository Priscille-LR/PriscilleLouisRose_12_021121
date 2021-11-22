import PropTypes from 'prop-types';
import './greeting.css';

function Greeting(props) {
   return (
      <div className="greeting">
         <h1>
            Bonjour <span className="user">{props.userName}</span>
         </h1>
         <p>Félicitations, tu as explosé tes objectifs hier ! 👏 </p>
      </div>
   );
}

export default Greeting;
