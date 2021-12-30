import UserList from './UserList/UserList';
import './App.css';
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <div>
     <Navbar/>
     <UserList/>
     </div>
    </div>
  );
}

export default App;
