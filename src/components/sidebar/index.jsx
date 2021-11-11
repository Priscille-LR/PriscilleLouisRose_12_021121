import PropTypes from 'prop-types';
import yogaIcon from '../../assets/yoga.svg';
import swimmingIcon from '../../assets/swimming.svg';
import bikingIcon from '../../assets/biking.svg';
import dumbbellIcon from '../../assets/dumbbell.svg';
import Button from '../button';
import './sidebar.css';

function Sidebar() {
   const icons = [yogaIcon, swimmingIcon, bikingIcon, dumbbellIcon];
   return (
      <div className="sidebar">
         <div className="sidebar__buttons">
            {icons.map((icon) => (
               <Button key={icon} icon={icon} />
            ))}
         </div>
         <p className="sidebar__copyright">Copyright, SportSee 2020</p>
      </div>
   );
}

export default Sidebar;
