import { Component } from "react";
import Nevbar from "../../components/navBar/nevbar";
import './home.css'
class Home extends Component {

    render() {
        return (
            <div>
                <Nevbar  />
                <h1>Welcome to Booking website Home Page</h1>
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link"> Home </Link></li>
                    <li><Link to={'/signUp'} className="nav-link">SignUp</Link></li>
                    <li><Link to={'/signIn'} className="nav-link">SignIn</Link></li>
                    <li><Link to={'/becomePartner'} className="nav-link">BecomePartner</Link></li>
                </ul>

            </div>


        )
    }
}

export default Home; 