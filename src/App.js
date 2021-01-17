import React, { useState } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Table from 'react-bootstrap/Table'
function App() {
  const [isopen, setIsopen] = useState(false)
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">SideBar Logo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">About Us</Nav.Link>
          <Nav.Link href="#features">Contact Us</Nav.Link>
          <Nav.Link href="#pricing">Page2</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#">Login</Nav.Link>
          <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Navbar>
      <div className="container">
        <Navbar bg="light" variant="light">
          <Nav className="mr-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />

            <Form.Control
              as="select"
              custom
            >
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="black">Black</option>
              <option value="orange">Orange</option>
            </Form.Control>
          </Nav>
          <Nav className="ml-auto">
            <Button
              className="btn btn-info px-4 font-weight-bolder"
              onClick={() => isopen ? setIsopen(false) : setIsopen(true)}
            >
              <i className="fa fa-plus-circle" title="Create Task"></i>
            </Button>
          </Nav>
        </Navbar>
        {console.log('isopen :>> ', isopen)}
        {isopen && (
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Player Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Player name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Player Role</Form.Label>
              <Form.Control as="select">
                <option>Wicker keper</option>
                <option>Capten</option>
                <option>Boler</option>
                <option>Fielder</option>
                <option>Bating</option>
                <option>Alrounder</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Player Salary</Form.Label>
              <Form.Control type="number" placeholder="Enter Player salary" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
           </Button>
          </Form>
        )}

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SN</th>
              <th>Player Name</th>
              <th>Player Role</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <i className="fa fa-edit text-success pointer font-weight-bold"></i> 	&nbsp;	&nbsp;
                <i className="fa fa-trash text-danger pointer font-weight-bold"></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>
                <i className="fa fa-edit text-success pointer font-weight-bold"></i> 	&nbsp;	&nbsp;
                <i className="fa fa-trash text-danger pointer font-weight-bold"></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>
                <i className="fa fa-edit text-success pointer font-weight-bold"></i> 	&nbsp;	&nbsp;
                <i className="fa fa-trash text-danger pointer font-weight-bold"></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>
                <i className="fa fa-edit text-success pointer font-weight-bold"></i> 	&nbsp;	&nbsp;
                <i className="fa fa-trash text-danger pointer font-weight-bold"></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>
                <i className="fa fa-edit text-success pointer font-weight-bold"></i> 	&nbsp;	&nbsp;
                <i className="fa fa-trash text-danger pointer font-weight-bold"></i>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
