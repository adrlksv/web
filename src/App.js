import logo from './logo.svg';
import './App.css';
import {Button} from "./button/Button"

function App() {
  return (
    <div className="App">
        <h1 className="header" style={{backgroundColor: "Purple"}}>Header level 1</h1>
        <div>Test div</div>
        <Button/>
    </div>
  );
}

export const test_value = "string";

export default App;

//
