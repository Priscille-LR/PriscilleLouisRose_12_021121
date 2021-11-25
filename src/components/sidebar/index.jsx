import yogaIcon from '../../assets/yoga.svg';
import swimmingIcon from '../../assets/swimming.svg';
import bikingIcon from '../../assets/biking.svg';
import dumbbellIcon from '../../assets/dumbbell.svg';
import SidebarButton from '../sidebarButton';
import { useContext } from 'react';
import { SourceContext } from '../../utils/context';
import './sidebar.css';

/**
 * Sidebar isn't functional yet, except the source switcher
 * that allows the user to switch between the 2 data sources
 */

function Sidebar() {
   const icons = [yogaIcon, swimmingIcon, bikingIcon, dumbbellIcon];
   const { switchSource, source } = useContext(SourceContext);

   return (
      <div className="sidebar">
         <div className="sidebar__buttons">
            {icons.map((icon) => (
               <SidebarButton key={icon} icon={icon} />
            ))}
         </div>
         <p className="sidebar__copyright">Copyright, SportSee 2020</p>
         <button className="switchSource-button" onClick={() => switchSource()}>
            Mode {source === 'mock' ? 'API' : 'MOCK'}
         </button>
      </div>
   );
}

export default Sidebar;
