

import Home from './pages/home/home';
import BecomePartner from './pages/becomePartner/becomePartner';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/singUp/signUp';
import { ReactDOM , Browser, Component } from 'react';
import NotFound from './pages/notFound/notFound';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
class App extends Component
 {
  render ()
  {
    return ( 
        <Router>
      <div>
        <Routes>
            <Route  path='/' element={<Home/>} />
            <Route path="signIn" element={<SignIn/>} />
            <Route path ="signUp" element={<SignUp/>} />
            <Route path="becomePartner" element={<BecomePartner/>}/>
            <Route path='*' element={<NotFound/>}/>
            
        </Routes>
      </div>
    </Router>)

  };
}



export default App