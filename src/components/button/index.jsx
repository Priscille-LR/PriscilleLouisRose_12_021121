import PropTypes from 'prop-types';
import './button.css';

function Button(props) {
   const { icon } = props;
   return (
      <div className="button">
         <img className="icon" src={icon} alt="" />
      </div>
   );
}

export default Button;
