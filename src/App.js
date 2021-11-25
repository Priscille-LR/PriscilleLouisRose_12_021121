import Header from './components/header';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import './App.css';

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
