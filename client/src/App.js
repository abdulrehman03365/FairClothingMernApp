import { AuthContext, AuthProvider } from "./Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import Nevbar from "./components/navBar/nevbar";
import AdminHome from './adminPages/adminHome';
import Home from './pages/home/home';
import BookMarque from './pages/bookMarque/bookMarque';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/singUp/signUp';
import NotFound from './pages/notFound/notFound';
import { ProtectedRoutes } from "./pages/protectedRoute/protectedRoutes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminSignIn from "./adminPages/adminSignIn/adminSignIn";
import { Provider } from "react-redux";
import store from './store/store'
import AuthCheker from "./components/AuthChecker/AuthCheker";
import ManageMarques from './adminPages/manageMarques/manageMarques';
import './App.css';
import { Navbar } from "react-bootstrap";

function App() {

  
  return (
    <Router>
      <AuthProvider>
        <Provider store={store}>
          <AuthCheker />

          <div style={{ overflow:"auto", height:'100vh', display: 'flex', flexDirection: 'column' }}>
            <ToastContainer className="toast-container" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="signIn" element={<SignIn />} />
              <Route path="/admin/signIn" element={<AdminSignIn />} />
              <Route path="/admin/home" element={<ProtectedRoutes component={AdminHome} />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="/bookMarque" element={<ProtectedRoutes component={BookMarque} />} />
              <Route path="/admin" element={<ProtectedRoutes component={AdminSignIn} />} />
              <Route path="/manageMarques" element={<ManageMarques />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          
          </div>
        </Provider>
      </AuthProvider>
    </Router>
  );
}

export default App;
