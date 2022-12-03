import { Button, Dropdown, Offcanvas, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaHive, FaSistrix, FaGratipay, FaCartArrowDown, FaAlignJustify, FaLinkedin, FaGoogleWallet, FaInstagram, FaPhoneAlt, FaAngleDown, FaCheck, FaChevronRight, FaChurch } from "react-icons/fa";



import './App.css';

import Header from './Header';
import Footer from './Footer';

function Home() {



  return (
    <>


      <Header />



      <banner>
        <div className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5 col-md-7 col-sm-12">
                <p className='text-warning mt-5'>B E S T  S E L L E R</p>
                <h1>Puching Clouds</h1>

                <div className='d-flex'>
                  <p className='me-4'>Napoleon Hill</p>
                  <span>Bussiness & Strategy</span>
                </div>

                <div className='d-flex'>
                  <p className='bordervr me-5'></p>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit esse quos dignissimos voluptatibus omnis, laboriosam, expedita eveniet perferendis quisquam distinctio, iure cupiditate. Perferendis quae excepturi quod culpa id, laudantium necessitatibus.</span>
                </div>

                <div className='d-flex my-5'>
                  <h3 className='text-warning'>$9.5 </h3>
                  <h4 className='mx-3'><strike>$12.0</strike></h4>
                  <button className='btn-danger  btn'>25% OFF</button>
                </div>

                <div className="d-flex">
                  <button className='btn-warning  btn'>buy now</button>
                  <button className='btn-light border  btn ms-3'>see details</button>
                </div>

                <p className="mt-5 mb-2 text-muted">Our Partner</p>
                <div className="d-flex text-muted">
                  <h4>High low</h4>
                  <h4 className="mx-5 mb-5">Amagin</h4>
                  <h4>Glow up</h4>
                </div>

              </div>

              <div className="col-xl-5 col-lg-4 col-md-5 col-sm-12 ">
                <div className='circle'>
                  <Carousel className='slinder'>
                    <Carousel.Item>
                      <img
                        className=" imagehw "
                        src={require('./image/boy.png')}
                        alt="First slide"
                      />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className=" imagehw "
                        src={require('./image/girl.png')}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </banner>

      <main>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-6">
              <div>
                <img src={require('./image/11.jpg')} className="image-hight" alt="" />
                <div className='child-box  d-none d-md-block'>
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





      <main>
        <div className="bg-light spacer">
          <div className="conatiner">
            <h1 className='text-center pt-4'>Recomended For You</h1>

            <p className='text-center pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br></br> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>


          <div className="container spacer">
            <div className="row justify-content-between ">
              {/* <div className=" d-flex justify-content-between "> */}
              <div className='col-xl-2 col-lg-4 col-md-4  col-4'>
                <img src={require('./image/s1.jpg')} className="slider-img5" alt="" />
                <h4 className='text'>thundur shunt</h4>
                <p className='text-warning ms-5 fs-5 fw-bold'>$16.70</p>
                <a href="#" className='text-white p-3 mt-4 rounded-2 text-decoration-none ms-3 text-capitalize colorbutoon px-4'>add to cart</a>
              </div>
              <div className='col-xl-2 col-lg-4 col-md-4 col-4 '>
                <img src={require('./image/s1.jpg')} className="slider-img5" alt="" />
                <h4 className='text'>thundur shunt</h4>
                <p className='text-warning ms-5 fs-5 fw-bold'>$16.70</p>
                <a href="#" className='text-white p-3 mt-4 rounded-2 text-decoration-none ms-3 text-capitalize colorbutoon px-4'>add to cart</a>
              </div>
              <div className='col-xl-2 col-lg-4 col-md-4 col-4 '>
                <img src={require('./image/s1.jpg')} className="slider-img5" alt="" />
                <h4 className='text'>thundur shunt</h4>
                <p className='text-warning ms-5 fs-5 fw-bold'>$16.70</p>
                <a href="#" className='text-white p-3 mt-4 rounded-2 text-decoration-none ms-3 text-capitalize colorbutoon px-4'>add to cart</a>
              </div>
              <div className='col-xl-2  col-lg-6 text-md-end  col-md-6 text-xl-start mt-5 mt-xl-0 col-6'>
                <img src={require('./image/s1.jpg')} className="slider-img5" alt="" />
                <h4 className='text'>thundur shunt</h4>
                <p className='text-warning ms-5 fs-5 fw-bold'>$16.70</p>
                <a href="#" className='text-white p-3 mt-4 rounded-2 text-decoration-none ms-3 text-capitalize colorbutoon px-4'>add to cart</a>
              </div>
              <div className='col-xl-2 col-lg-6 mt-5 mt-xl-0 col-md-6 col-6'>
                <img src={require('./image/s1.jpg')} className="slider-img5" alt="" />
                <h4 className='text'>thundur shunt</h4>
                <p className='text-warning ms-5 fs-5 fw-bold'>$16.70</p>
                <a href="#" className='text-white p-3 mt-4 rounded-2 text-decoration-none ms-3 text-capitalize colorbutoon px-4 mb-5'>add to cart</a>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </main>


      <section className='spacer1'>
        <div className="container spacer">
          <div className="row mt-5 mb-5 spacer">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 text-center">
              <p className='p-4  d-inline bg-light text-warning fs-2  box'><FaGoogleWallet /></p>
              <h4 className='mt-5 mb-3 ms-4 text'>Quick Delivery</h4>
              <p className='text-muted text-center'> Tempora laudantium nam ducimus, recusandae incidunt soluta reiciendis,</p>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 text-center mt-5  mt-sm-0">
              <p className='p-4  d-inline bg-light text-warning fs-2 box'><FaGoogleWallet /></p>
              <h4 className='mt-5 mb-3 ms-4 text'>Quick Delivery</h4>
              <p className='text-muted text-center'> Tempora laudantium nam ducimus, recusandae incidunt soluta reiciendis,</p>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-5 mt-lg-0 col-12 text-center">
              <p className='p-4  d-inline bg-light text-warning fs-2 box'><FaGoogleWallet /></p>
              <h4 className='mt-5 mb-3 ms-4 text'>Quick Delivery</h4>
              <p className='text-muted text-center'> Tempora laudantium nam ducimus, recusandae incidunt soluta reiciendis, </p>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-5 mt-lg-0 col-12 text-center">
              <p className='p-4  d-inline bg-light text-warning fs-2 box'><FaGoogleWallet /></p>
              <h4 className='mt-5 mb-3 ms-4 text text-center'>Quick Delivery</h4>
              <p className='text-muted text-center '> Tempora laudantium nam ducimus, recusandae incidunt soluta reiciendis, </p>
            </div>

          </div>
        </div>
      </section>






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


      <section>
        <div className="bg-light">
          <div className="container">

            <div className='text-center pt-5 pb-5'>
              <h1>Our Pricing</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim blanditiis facilis laudantium corporis unde nam amet, at distinctio ea magni quaerat et obcaecati harum nihil dolor quam error perferendis aperiam.</p>
            </div>

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 bg-white rounded-5">
                <div className='fullhover p-5 rounded-5'>
                  <div className='text-center'>
                    <h1>Basic Plan</h1>
                    <h1 className='text-warning mt-4 mb-4'>$99<sub className='fs-6 text-dark'>/month</sub></h1>
                    <p>Aliquem dui lacus , laboratry quis spening noon.</p>
                  </div>
                  <hr></hr>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />Graphics Desing</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />web design</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />ui/ux</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />HTML/CSS</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />SEO marketing</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />bussiness analysis</p>
                  <button className='bg-warning p-2 rounded-3 btnmargin'>star now <FaChevronRight /></button>
                </div>
              </div>



              <div className="col-xl-4 col-lg-4 col-md-6 bg-white rounded-5">
                <div className='fullhover p-5 rounded-5'>
                  <div className='text-center'>
                    <h1>Basic Plan</h1>
                    <h1 className='text-warning mt-4 mb-4'>$99<sub className='fs-6 text-dark'>/month</sub></h1>
                    <p>Aliquem dui lacus , laboratry quis spening noon.</p>
                  </div>
                  <hr></hr>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />Graphics Desing</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />web design</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />ui/ux</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />HTML/CSS</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />SEO marketing</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />bussiness analysis</p>
                  <button className='bg-warning p-2 rounded-3 btnmargin'>star now <FaChevronRight /></button>
                </div>
              </div>





              <div className="col-xl-4 col-lg-4 col-md-6 mt-md-5 mt-lg-0 bg-white rounded-5 " >
                <div className='fullhover p-5  rounded-5 '>
                  <div className='text-center'>
                    <h1>Basic Plan</h1>
                    <h1 className='text-warning mt-4 mb-4'>$99<sub className='fs-6 text-dark'>/month</sub></h1>
                    <p>Aliquem dui lacus , laboratry quis spening noon.</p>
                  </div>
                  <hr></hr>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />Graphics Desing</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />web design</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />ui/ux</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />HTML/CSS</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />SEO marketing</p>
                  <p className='text-muted fs-5'><FaCheck className='bg-light text-warning me-3 m-2' />bussiness analysis</p>
                  <button className='bg-warning p-2 rounded-3 btnmargin'>star now <FaChevronRight /></button>
                </div>
              </div>
            </div>

          </div>


        </div>
      </section>

      <section>

        <div className="container spacer">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-6">
              <div>
                <FaChurch className='icon-img text-warning ms-4 ' />
                <h1 className='text mt-3 ms-4'>125,663</h1>
                <h5 className='ms-2'>happy Customers</h5>
              </div>
            </div>


            <div className="col-xl-3 col-lg-3 col-md-6 col-6">
              <div>
                <FaChurch className='icon-img text-warning ms-4 ' />
                <h1 className='text mt-3 ms-4'>125,663</h1>
                <h5 className='ms-2'>happy Customers</h5>
              </div>
            </div>


            <div className="col-xl-3 col-lg-3 col-md-6 mt-4 mt-lg-0 col-6">
              <div>
                <FaChurch className='icon-img text-warning ms-4 ' />
                <h1 className='text mt-3 ms-4'>125,663</h1>
                <h5 className='ms-2'>happy Customers</h5>
              </div>
            </div>


            <div className="col-xl-3 col-lg-3 col-md-6 mt-4 mt-lg-0 col-6">
              <div>
                <FaChurch className='icon-img text-warning ms-4 ' />
                <h1 className='text mt-3 ms-4'>125,663</h1>
                <h5 className='ms-2'>happy Customers</h5>
              </div>
            </div>


          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
export default Home;