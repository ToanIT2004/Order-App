'use client';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';

export default function DashBoardAdmin() {
    return (
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container fluid>
                <Navbar.Brand href='#'>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <div className='d-flex flex-column flex-lg-row justify-content-between w-100'>
                        <Nav className='col-12 col-lg-7 d-flex justify-content-around' navbarScroll>
                            <NavDropdown title='Trang chủ' id='navbarScrollingDropdown'>
                                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                                <NavDropdown.Item href='#action4'>Another action</NavDropdown.Item>
                                <NavDropdown.Item href='#action5'>Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Quản trị' id='navbarScrollingDropdown'>
                                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                                <NavDropdown.Item href='#action4'>Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='#action5'>Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title='Sản phẩm' id='navbarScrollingDropdown'>
                                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                                <NavDropdown.Item href='#action4'>Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='#action5'>Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='#home'>Chăm sóc khách hàng</Nav.Link>
                        </Nav>
                        <Dropdown className='mt-2 mt-lg-1 align-self-end' align='start'>
                            <Dropdown.Toggle split variant='success' id='dropdown-basic'>
                                <FaUser />
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ marginLeft: '-112px' }}>
                                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
