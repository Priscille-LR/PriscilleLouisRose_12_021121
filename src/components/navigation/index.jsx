import PropTypes from 'prop-types';
import './navigation.css';

function Navigation() {
   return (
      <div className="header__nav">
         <span className="nav-item">Accueil</span>
         <span className="nav-item">Profil</span>
         <span className="nav-item">Réglage</span>
         <span className="nav-item">Communauté</span>
      </div>
   );
}

export default Navigation;
