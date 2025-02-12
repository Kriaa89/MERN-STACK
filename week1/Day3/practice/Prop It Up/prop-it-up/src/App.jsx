import './App.css'
import PersonCard from './components/Person'
function App() {
  return (
      <div className='app'>
          <PersonCard
              firstName={"John"}
              lastName={"Doe"}
              age={45}
              hairColor={"Black"}
          />
          <PersonCard
              firstName={"John"}
              lastName={"Doe"}
              age={45}
              hairColor={"Black"}
          />
          <PersonCard
              firstName={"John"}
              lastName={"Doe"}
              age={45}
              hairColor={"Black"}
          />
      </div>
    );
}
export default App;