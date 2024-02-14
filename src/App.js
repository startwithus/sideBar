import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Customer from './pages/Customer';
import Billing from './pages/Billing';
import Support from './pages/Support';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
          <Route exact path='/user' element={<User/>}/>
          <Route exact path='/customer' element={<Customer/>}/>
          <Route exact path='/billing' element={<Billing/>}/>
          <Route exact path='/support' element={<Support/>}/>
        </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
