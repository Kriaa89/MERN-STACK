import './App.css';
import ReactUser from './components/ReactUser';

function App() {
  return (
    <div className='App'>
      <ReactUser
        firstName="John"
        lastName="Doe"
        hairColor="Black"
        initialAge={30}
      />
      <ReactUser
        firstName="smith"
        lastName="Doe"
        hairColor="Brown"
        initialAge={88}
      />
    </div>
    
  );
}
export default App 


