import logo from './logo.svg';
import './App.css';
import Test from './Components/Test';
import State from'./Components/State';
import { ConditionalRendering ,  TerniaryCondition, AndOperator} from './Components/Conditional';
import Products from './Components/ListRendering';
import {Type1List,ToDoList} from './Components/Lists';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <Test/>
    // <State/>
    // <>
    //   <ConditionalRendering isLoggedIn={"ADMIN"}/>
    //   <ConditionalRendering isLoggedIn={""}/>
    //   <TerniaryCondition isLoggedIn={"ADMIN"} />
    //   <TerniaryCondition isLoggedIn={""}/>
    //   <AndOperator isLoggedIn={"ADMIN"} />
    //   <AndOperator isLoggedIn={""}/>
    // </>

    // <Products />
    // <Type1List />
    <ToDoList/>
  );
}

export default App;
