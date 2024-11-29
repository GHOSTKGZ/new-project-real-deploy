import './App.css';
import UsersList from './components/UserList';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a href='#'>Fetching User accounts</a>
          {/* <a href='#'>Fetching Posts</a>
          <a href='#'>Managing erros</a> */}
        </nav>
      </header>
      <UsersList />
    </div>
  );
}

export default App;
