import React ,{Component, StrictMode} from "react";
import ReactDOM from "react-dom";
import App from "./App";

import './index.css'
import {Route , Link , BrowserRouter as Router , Routes} from 'react-router-dom'







ReactDOM.render(
<StrictMode>
<Router>
<App/>
</Router>
</StrictMode>   , document.getElementById('root'));


