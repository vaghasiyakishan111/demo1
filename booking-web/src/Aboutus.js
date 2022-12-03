import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Button, Dropdown, Offcanvas, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleRight, FaBookOpen, FaAngleDoubleRight, FaMedal, FaStore } from "react-icons/fa";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import { FaHive, FaSistrix, FaGratipay, FaCartArrowDown, FaAlignJustify, FaLinkedin, FaGoogleWallet, FaInstagram, FaPhoneAlt, FaAngleDown, FaCheck, FaChevronRight, FaChurch } from "react-icons/fa";


const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 1,

        }
    },
};

function Aboutus() {


    return (
        <div>

            <Header />
            <OwlCarousel 
                className="owl-theme  "
                {...options}
                loop
                nav
                margin={8} >
                <div ><img className="img" src={require('./image/1.jpg')} /></div>
                <div ><img className="img" src={require('./image/book.jpg')} /></div>
                
            </OwlCarousel>

            <section>
                <div className='bg-image'>
                    <div className='bg-leyer opacity-75'>
                        <p className='display-3 fw-semibold text-white text-center pt-5 '>About Us</p>


                        <div className=' border text-white fw-semibold d-inline p-4 bg-yellow  center text-center '>
                            <a href="#" className='text-white text-decoration-none center z-index'>HOME   <FaAngleRight /></a><span> ABOUT US</span>
                        </div>


                    </div>
                </div>

            </section>

            {/* <div  className=' border text-white fw-semibold d-inline p-4 bg-yellow  text-center'>
                            <a href="#" className='text-white text-decoration-none '>HOME   <FaAngleRight/></a><span> ABOUT US</span>
                        </div> */}

            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-6">
                            <div>
                                <img src={require('./image/11.jpg')} className="image-hight" alt="" />
                                <div className='child-box  d-none '>
                                    <p className='display-3 text-center fw-bold '>50+</p>
                                    <p className='fs-5 text-center '>years of Experience</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-6">
                            <img src={require('./image/book.jpg')} className="image2-hight" alt="" />
                            <div className='p-icon'>
                                <p ><FaCheck className='fs-5 me-3 text-warning' />Comics & Graphics</p>
                                <p><FaCheck className='fs-5 me-3 text-warning' />Biography</p>
                                <p ><FaCheck className='fs-5 me-3 text-warning' />Biography</p>
                                <p ><FaCheck className='fs-5 me-3 text-warning' />Biography</p>
                            </div>


                        </div>

                        <div className="col-xl-6 col-lg-4  col-12 textt">
                            <h1>Bookland Is Best Choice For Learners</h1>
                            <p className='ps-5 mt-4 fs-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. It Is A Long Established Fact That A Reader Will Be Distracted</p>
                            <a href="#" className='btn btn-warning ms-5 p-2 text-light fs-5 mt-4'>contact us</a>
                        </div>
                    </div>
                </div>
            </main>




            <section2>
                <div className="bg-light">
                    <div className="container">
                        <div className="row mt-5">
                            <h1 className='fw-bold text-center mt-5'>Our Mission</h1>
                            <p className='text-muted text-center mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>

                            <div className="col-xl-4 mt-3">
                                <div className='bg-white rounded-4 shadow-lg p-5 slide-1'>
                                    <FaBookOpen className='display-1' />
                                    <h4 className='fw-bold my-4'>Best Bookstore</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <a href="#" className='text-decoration-none text-yellow fs-4'>Learn More <FaAngleDoubleRight /></a>
                                </div>
                            </div>

                            <div className="col-xl-4 mt-3">
                                <div className='bg-white rounded-4 shadow-lg p-5 slide-1'>
                                    <FaMedal className='display-1' />
                                    <h4 className='fw-bold my-4'>trusted seller</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <a href="#" className='text-decoration-none text-yellow fs-4'>Learn More <FaAngleDoubleRight /></a>
                                </div>
                            </div>

                            <div className="col-xl-4 mt-3">
                                <div className='bg-white rounded-4 shadow-lg mb-5 p-5 slide-1'>
                                    <FaStore className='display-1' />
                                    <h4 className='fw-bold my-4'>expend store</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <a href="#" className='text-decoration-none text-yellow fs-4'>Learn More <FaAngleDoubleRight /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section2>



            <section className='spacer bg-light pb-5'>

                <div className="container ">
                    <div className="row mb-5 justify-content-between ">
                        <h1 className='text text-capitalize text-center mt-5'>our mission</h1>
                        <p className='text-muted text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quia distinctio tempore in nostrum architecto tempora dolore! Fugit obcaecati ex aperiam, distinctio ipsa nulla optio, repellendus dolores expedita totam repudiandae.</p>

                        <div className='col-lg-3 col-md-5 border border-warning p-3 mt-5 bg-white rounded-5 border-2 shadow-lg'>
                            <FaHive className='display-1' />
                            <h3 className='text py-3'>best bookstore</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt accusantium dolores pariatur numquam iure quos asperiores doloribus laborum quo ratione? Error labore odit, eum vitae expedita aliquid sequi iure dolor.</p>
                            <h5 className='text-warning'>learn more </h5>

                        </div>
                        <div className='col-lg-3 col-md-5 border border-warning p-3 mt-5 bg-white rounded-5 border-2 shadow-lg  '>
                            <FaHive className='display-1' />
                            <h3 className='text py-3'>best bookstore</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt accusantium dolores pariatur numquam iure quos asperiores doloribus laborum quo ratione? Error labore odit, eum vitae expedita aliquid sequi iure dolor.</p>
                            <h5 className='text-warning'>learn more </h5>

                        </div>
                        <div className='col-lg-3 col-md-12 border border-warning p-3 mt-5 bg-white rounded-5 border-2 shadow-lg'>
                            <FaHive className='display-1' />
                            <h3 className='text py-3'>best bookstore</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt accusantium dolores pariatur numquam iure quos asperiores doloribus laborum quo ratione? Error labore odit, eum vitae expedita aliquid sequi iure dolor.</p>
                            <h5 className='text-warning'>learn more</h5>

                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default Aboutus