import PropTypes from 'prop-types';
import './greeting.css';

/**
 * @param {string} userName
 * @returns Hello user
 */

function Greeting({ userName }) {
   return (
      <div className="greeting">
         <h1>
            Bonjour <span className="user">{userName}</span>
         </h1>
         <p>Félicitations, tu as explosé tes objectifs hier ! 👏 </p>
      </div>
   );
}

Greeting.propTypes = {
   userName: PropTypes.string.isRequired,
};

export default Greeting;
