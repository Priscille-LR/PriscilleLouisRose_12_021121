import PropTypes from 'prop-types';
import './macro-card.css';

/**
 * @param {strings} icon, value, type, className
 * @returns
 */

function MacroCard({ icon, value, type, className }) {
   return (
      <div className="macros__card">
         <div className={`macros__card__icon ${className}`}>
            <img src={icon} alt="" className="macros-icon" />
         </div>
         <div className="macros__card__info">
            <h3>{value}</h3>
            <p>{type}</p>
         </div>
      </div>
   );
}

MacroCard.propTypes = {
   icon: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   className: PropTypes.string.isRequired,
};

export default MacroCard;
