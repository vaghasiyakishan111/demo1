import { Button, Dropdown, Offcanvas, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaHive, FaSistrix, FaGratipay, FaCartArrowDown, FaAlignJustify, FaLinkedin, FaGoogleWallet, FaInstagram, FaPhoneAlt, FaAngleDown, FaCheck, FaChevronRight, FaChurch } from "react-icons/fa";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';


function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="container">
                <div className="row border-bottom">
                    <div className='d-flex  justify-content-between py-3'>
                        <div className="col-xl-2">

                            <img src={require('./image/1.png')} alt="" className='w-100' />
                        </div>
                        <div className="col-xl-4 d-lg-flex justify-content-end bg-light d-none d-lg-block  ">
                            <Dropdown>
                                <Dropdown.Toggle variant='light' id="dropdown-basic" className='p-3'>
                                    category
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className='p-3'>
                                <input type="search" name="" placeholder='Search Book Here' id="" className='50'  ></input><FaSistrix />
                            </div>
                        </div>
                        <div className="col-xl-3 text-center p-3  d-none d-lg-block">
                            <FaGratipay className='fs-3 me-4 ' />
                            <FaCartArrowDown className='fs-3 ' />
                        </div>
                        <div className="col-xl-2  d-none d-lg-block">
                            <Dropdown>
                                <Dropdown.Toggle variant='light' id="dropdown-basic" className='d-flex rounded-4'>
                                    <img src={require('./image/1.jpg')} className="dropimg rounded-4" ></img>
                                    <div className='ps-1' >
                                        <span class="fw-bold ">Brian</span>
                                        <p>info@gmail.com</p>
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className=' d-block d-lg-none d-flex'>
                            <a href="#" className='btn btn-warning text-white d-none d-md-block fw-bold p-2'>get in touch</a>


                            <Button variant="" onClick={handleShow}>
                                <FaAlignJustify className='bg-warning bar p-2  rounded-1 ms-3 text-light' />
                            </Button>

                            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title> <img src={require('./image/1.png')} alt="" className='w-100' /></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <input type="search" name="" placeholder='Search Book Here' id="" size="30 " className='border-0 bg-light p-3 rounded-2' ></input><FaSistrix />
                                    <ul className='padd'>

                                        <link to="/">about us</link>
                                        <link to="/aboutus">about us</link>
                                        <li><a href="#" className=''>pages</a></li>
                                        <li><a href="#">shop</a></li>
                                        <li><a href="#">blog</a></li>
                                        <li><a href="#">contact us</a></li>

                                    </ul>
                                    <a href="#"><FaLinkedin className='fs-2 text-warning ms-5 ' /></a>
                                    <a href="#"><FaInstagram className='fs-2 text-warning ' /></a>
                                    <a href="#"><FaPhoneAlt className='fs-2 text-warning ' /></a>
                                    <a href="#"><FaLinkedin className='fs-2 text-warning ' /></a>

                                </Offcanvas.Body>
                            </Offcanvas>

                        </div>

                    </div>
                </div>
            </div>



            <header>

                <div className="container  ">
                    <div className="row  justify-content-between py-3  ">


                        <div className="col-xl-7 d-none d-lg-block  ">
                            <ul className='ps-0 d-flex menubar'>
                                <li className='menubar'><Link to="/" className='text-decoration-none fw-bold me-4 fs-5 text-dark menubar'> Home<FaAngleDown /></Link></li>
                                <li><Link to="/aboutus" className='text-decoration-none fw-bold me-4 fs-5 text-dark'> aboutus<FaAngleDown /></Link></li>
                                <li><a href="#" className='text-decoration-none fw-bold me-4 fs-5 text-dark  '>page<FaAngleDown /></a></li>
                                <li><a href="#" className='text-decoration-none fw-bold me-4 fs-5 text-dark  '>shop<FaAngleDown /></a></li>
                                <li><a href="#" className='text-decoration-none fw-bold me-4 fs-5 text-dark  '>contact</a></li>
                                <li><a href="#" className='text-decoration-none fw-bold me-4 fs-5 text-dark  '>blog<FaAngleDown /></a></li>
                            </ul>
                        </div>
                        <div className='col-xl-2  text-end  d-none d-xl-block'>
                            <span><a href="#" className='btn btn-warning text-white fw-bold  '>get in touch</a></span>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
export default Header;