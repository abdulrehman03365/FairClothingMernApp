

import Home from './pages/home/home';
import BecomePartner from './pages/becomePartner/becomePartner';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/singUp/signUp';
import { ReactDOM , Browser, Component } from 'react';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
class App extends Component
 {
  render ()
  {
    return ( 
        <Router>
      <div>
        <h2>Welcome to App.js</h2>
        <Routes>
            <Route  path='/' element={<Home/>} />
            <Route path="signIn" element={<SignIn/>} />
            <Route path ="signUp" element={<SignUp/>} />
            <Route path="becomePartner" element={<BecomePartner/>}/>
        </Routes>
      </div>
    </Router>)

  };
}



export default App