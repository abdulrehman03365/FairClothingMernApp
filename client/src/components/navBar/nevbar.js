import { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './navbar'
function Nevbar() {

    const [value, setValue] = useState("initial value")
    return (
        <div>
            <nav id="navbar" class="">
                <div class="nav-wrapper">
                    <div class="logo">
                        <a href="#home"><i class="fa fa-angellist"></i> Logo</a>
                    </div>

                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>



            <div class="menuIcon">
                <span class="icon icon-bars"></span>
                <span class="icon icon-bars overlay"></span>
            </div>


            <div class="overlay-menu">
                <ul id="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

        </div>
    )
}




export default Nevbar