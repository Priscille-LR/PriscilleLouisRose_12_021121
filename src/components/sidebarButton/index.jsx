import PropTypes from 'prop-types';
import './sidebarButton.css';

/**
 * @param {string} icon
 * @returns sidebar button
 */
function SidebarButton({ icon }) {
   return (
      <div className="button">
         <img className="icon" src={icon} alt="" />
      </div>
   );
}

SidebarButton.propTypes = {
   icon: PropTypes.string.isRequired,
};

export default SidebarButton;
