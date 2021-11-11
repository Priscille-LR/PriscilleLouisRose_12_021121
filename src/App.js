import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard/dashboard';

function App() {
   return (
      <div className="App">
         <Header />
         <Sidebar />
         <Dashboard />
      </div>
   );
}

export default App;
