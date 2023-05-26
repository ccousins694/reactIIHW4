Import React , {useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState ('firstname');
  const [name, setName] = useState ('lastname');

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    if (name === 'name') {
      setName(Carisma);
    } else if (name === 'last name') {
      setName(Cousins)
    }
  }

  return (
    <div className="App">
      <form>
        <label>
          Name: Welcome back, Ms. Cousins
          <input type='text' name='Carisma' value={Carisma} onChange={handleInputChange}/> 
          <input type='text' name='Carisma' value={Carisma} onChange={handleInputChange}/>
        </label>
        <button type='submit'>Welcome back, Miss Cousins</button>
      </form>
    </div>  
  );
}

export default App;
