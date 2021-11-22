import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard/dashboard';

function App() {

   const userId = process.env.REACT_APP_USERID

   return (
      <div className="App">
         <Header />
         <Sidebar />
         <Dashboard userId={userId} />
      </div>
   );
}

export default App;
