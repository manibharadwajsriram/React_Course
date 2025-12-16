import './App.css';
import { Routes,Route } from 'react-router';
import Header from './components/Header';
import DashBoard from './components/DashBoard';


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route index element={<DashBoard />}></Route>
    </Routes>
    </>
  );
}

export default App;
