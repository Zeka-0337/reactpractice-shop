import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";
// export한 변수명 그대로 import 해야한다.
import Data from "./data.js";

import Detail from "./Detail.js";

// Route 페이지 나누기
import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Shoe-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* 페이지 이동하는 법 1 : Link태그 */}
              <Nav.Link as={Link} to="/">
                Home{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        {/* Switch : 여러개가 맞아도 하나만. 우선순위는 위부터 */}
        <Route exact path="/">
          {/* src에 넣은 파일은 파일명변경 및 압축됨, public에 넣은 파일은 보존됨 */}
          <div className="welcome-box">
            <h1>20% Season Off</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus incidunt doloremque qui ipsa facere iure? Vitae inventore, deleniti, sunt
              dolorem, ducimus sapiente facilis libero obcaecati ullam sit corrupti cum!
            </p>
            <button className="btn btn-primary"> Look around</button>
          </div>
          <div className="container">
            <div className="row">
              {shoes.map(function (a, i) {
                return <Item data={a} key={i} />;
              })}
            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        <Route path="/:id">
          <div> 아무거나 적었을때 이거 보여주셈 </div>
        </Route>

        {/* Component만 Route하기 */}
        {/* <Route path="/어쩌구" component={Modal}></Route> */}
      </Switch>
    </div>
  );
}

function Item(props) {
  return (
    <div className="col-md-4">
      <img className="w-100" src={props.data.img} alt="" />
      <h4>{props.data.title}</h4>
      <p>
        {props.data.content} & {props.data.price}
      </p>
    </div>
  );
}

export default App;
