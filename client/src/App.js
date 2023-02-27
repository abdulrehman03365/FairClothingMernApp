

import Home from './pages/home/home';
import bookMarque from './pages/bookMarque/bookMarque';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/singUp/signUp';
import { ReactDOM , Browser, Component } from 'react';
import NotFound from './pages/notFound/notFound';
import { ProtectedRoutes } from './pages/protectedRoutes';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <Route path="bookMarque" element={<ProtectedRoutes component={bookMarque} />}/>
            <Route path='*' element={<NotFound/>}/>
            
        </Routes>
      </div>
    </Router>)

  };
}



export default App