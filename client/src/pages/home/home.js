import { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import bookMarque from "../bookMarque/bookMarque";
import Nevbar from "../../components/navBar/nevbar";
import Footer from "../../components/Footer/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {


  const [value, setValue] = useState("initial value")
  return (
    < >
      <Nevbar></Nevbar>


      <div className="homeBody">

        <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>
             <Row>
             <Col>1 of 3</Col> <Col bg="primary">1 of 3</Col>
              </Row> 
            </Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>


    </>
  )
}




export default Home