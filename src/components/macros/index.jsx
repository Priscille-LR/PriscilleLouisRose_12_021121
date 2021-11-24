import PropTypes from 'prop-types';
import caloriesIcon from '../../assets/calories.svg';
import proteinIcon from '../../assets/protein.svg';
import carbsIcon from '../../assets/carbs.svg';
import fatIcon from '../../assets/fat.svg';
import MacroCard from '../macroCard';
import './macros.css';

function Macros(props) {
   const userInfo = props.userInfo;

   return (
      <div className="macros-wrapper">
         <MacroCard
            icon={caloriesIcon}
            value={userInfo.getCalorieCount()}
            type={'calories'}
            className="caloriesIcon"
         />
         <MacroCard
            icon={proteinIcon}
            value={userInfo.getProteinCount()}
            type={'protéines'}
            className="proteinIcon"
         />
         <MacroCard
            icon={carbsIcon}
            value={userInfo.getCarbohydrateCount()}
            type={'glucides'}
            className="carbsIcon"
         />
         <MacroCard
            icon={fatIcon}
            value={userInfo.getLipidCount()}
            type={'lipides'}
            className="fatIcon"
         />
      </div>
   );
}

export default Macros;
