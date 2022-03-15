
import './App.css';
import {Template} from "./components/Template";

// use state, use effect 
// todo list 만들기 

const App = () => {
  return (
    <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Template>
          <h1>헬로 월드</h1></Template>
    </div>
  );
}

export default App;
