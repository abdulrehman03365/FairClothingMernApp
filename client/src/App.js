

import Home from './components/home/home';
import BecomePartner from './components/becomePartner/becomePartner';
import SignIn from './components/signIn/signIn';
import SignUp from './components/singUp/signUp';
import { ReactDOM , Browser, Component } from 'react';
import NotFound from './components/notFound/notFound';
import { ProtectedRoutes } from './components/protectedRoutes';
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
            <Route path="becomePartner" element={<ProtectedRoutes component={BecomePartner} />}/>
            <Route path='*' element={<NotFound/>}/>
            
        </Routes>
      </div>
    </Router>)

  };
}



export default App