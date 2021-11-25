import logo from '../../assets/logo.png';
import Navigation from '../navigation';
import './header.css';

/**
 * @returns header
 */

function Header() {
   return (
      <div className="header">
         <img className="header__logo" src={logo} alt="sportsee" />
         <Navigation />
      </div>
   );
}

export default Header;
