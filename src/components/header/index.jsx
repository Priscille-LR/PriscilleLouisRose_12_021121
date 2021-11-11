import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import Navigation from '../navigation';
import './header.css';

function Header() {
   return (
      <div className="header">
         <img className="header__logo" src={logo} alt="sportsee" />
         <Navigation />
      </div>
   );
}

export default Header;
