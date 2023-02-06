import logo from './logo.svg';
import './App.css';
import home from './pages/home/home';
import becomePartner from './pages/becomePartner/becomePartner';
import signIn from './pages/signIn/signIn';
import signUp from './pages/signUp/signUp';
import { ReactDOM , Browser } from 'react';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div>
      <h2>Welcome to App.js</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li><Link to={'/signUp'} className="nav-link">SignUp</Link></li>
        <li><Link to={'/signIn'} className="nav-link">SignIn</Link></li>
        <li><Link to={'/becomePartner'} className="nav-link">BecomePartner</Link></li>
      </ul>
      </nav>
      <hr />
      <Routes>
          <Route  path='/' element={<home/>} />
          <Route path="/signIn" element={<signIn/>} />
          <Route path ='/signUp' element={<signUp/>} />
          <Route path='/becomePartner' element={<becomePartner/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
