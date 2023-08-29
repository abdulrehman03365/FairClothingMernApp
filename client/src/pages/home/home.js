import { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import bookMarque from "../bookMarque/bookMarque";
import Nevbar from "../../components/navBar/nevbar";
import Footer from "../../components/Footer/Footer";
import  Container   from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../../assets/logo-color.png"
import './home.css'
function Home() {


  const [value, setValue] = useState("initial value")
  return (
    <>
<Nevbar></Nevbar>


    </>
    
    
  )
}




export default Home