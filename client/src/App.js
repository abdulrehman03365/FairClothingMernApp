import { AuthContext, AuthProvider } from "./Context/AuthContext";
import "bootstrap-icons/font/bootstrap-icons.css";
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
import ManageCloths from './adminPages/manageCloths/manageCloths';
import './App.css';
import Footer from "./components/Footer/Footer";
import { Navbar } from "react-bootstrap";

function App() {

  
  return (
    <Router>
      <AuthProvider>
        <Provider store={store}>
          <AuthCheker />

          <div style={{ overflow:"auto", minHeight:'100vh', display: 'flex', flexDirection: 'column' }}>
            <ToastContainer className="toast-container" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="signIn" element={<SignIn />} />
              <Route path="/admin/signIn" element={<AdminSignIn />} />
              <Route path="/admin/home" element={<ProtectedRoutes component={AdminHome} />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="/bookMarque" element={<ProtectedRoutes component={BookMarque} />} />
              <Route path="/admin" element={ <AdminSignIn/>} />
              <Route path="/manageCloths" element={<ProtectedRoutes component={ManageCloths}  />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
          </div>
        </Provider>
      </AuthProvider>
    </Router>
  );
}

export default App;
  