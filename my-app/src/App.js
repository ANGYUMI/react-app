
import './App.css';
import {Template} from "./components/Template";

// use state, use effect 
// todo list 만들기 

const App = () => {
  return (
    <div className="App">
        <h1>
          ToDo List
        </h1>
        <Template></Template>
    </div>
  );
}

export default App;
