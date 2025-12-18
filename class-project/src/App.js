import './App.css';
import { Routes,Route } from 'react-router';
import Header from './components/Header';
import DashBoard from './components/DashBoard';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <Content >
      <Routes>
        <Route index element={<DashBoard />}></Route>
      </Routes>
    </Content>
    <Footer />
    </>
  );
}

export default App;
