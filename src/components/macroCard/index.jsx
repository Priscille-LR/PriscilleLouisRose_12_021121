import PropTypes from 'prop-types';
import './macro-card.css';

function MacroCard(props) {
   const { icon, value, type, className } = props;

   return (
      <div className="macros__card">
         <img
            src={icon}
            alt="calories"
            className={`macros__card__icon ${className}`}
         />
         <div className="macros__card__info">
            <h3>{value}</h3>
            <p>{type}</p>
         </div>
      </div>
   );
}

export default MacroCard;
