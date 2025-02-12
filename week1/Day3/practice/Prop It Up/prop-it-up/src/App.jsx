import './App.css'
import './index.css'
import PersonCard from './components/Person'
function App() {
    return (
        <div className='card'>
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