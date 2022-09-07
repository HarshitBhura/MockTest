
import './App.css';
import card from './component/Card';

function App() {
  return (
    <div className="App">
      
    <card 
    name="harsh"
    age={20} 
    />

<card 
    name="pankaj"
    age={22} />

<card 
    name="deepak"
    age={24} />
    </div>
    
  );
}

export default App;
