function Footer()
{
    return(
        <>
          <footer>
        <div className="bg-color">
          <div className="container">
            <div className="row pt-5">
              <div className="col-xl-6 text-white text-center text-xl-start  ">
                <h2 className='fw-bold'>Subscribe our newsletter for newest books updates</h2>
              </div>

              <div className="col-xl-5  text-xl-end text-center ms-5 pb-5">
                <input type="search" placeholder='your email address ' className='border-0 mt-4 p-3 px-5' /><span className='btn ms-2 btn-warning text-uppercase p-3'>subscribe</span>

              </div>
            </div>
          </div>
        </div>



        <div className='bg-yellow text-white pb-4 '>
          <h5 className='ms-4 text-capitalize p-5 pt-5'>+     books categories</h5>
        
        </div>
        <div className='bg-color pt-0 '>
          <div className='container'>
            <div className="row pt-5 text-white">
              <div className="col-xl-3 text-center">
              <img src={require('./image/1.png')}></img>
              <p className='mt-4 mb-5'>Bookland is a Book Store Ecommerce Website Template by DexignZone lorem ipsum dolor sit</p>
              </div>

              <div className="col-xl-2 col-4">
                <h3 className='text-uppercase'>our links</h3>
                <p className='mt-4'> about us</p>
                <p> contact us</p>
                <p>privacy policy</p>
                <p> pricing table</p>
                <p>FAQ</p>
              </div>

              <div className="col-xl-2 col-4">
                <h3 className='text-uppercase'>Bookland </h3>
                <p className='mt-4'>Bookland ?</p>
                <p> contact us</p>
                <p>privacy policy</p>
                <p> pricing table</p>
                <p>FAQ</p>
              </div>

              <div className="col-xl-2 col-4">
                <h3 className='text-uppercase'>Resources</h3>
                <p className='mt-4'> Resources</p>
                <p>contact us</p>
                <p>privacy policy</p>
                <p>pricing table</p>
                <p> FAQ</p>
              </div>
              <div className="col-xl-3 col-12 mt-5 mt-xl-0">
                <h4 className='text-capitalize'>get in touch with us</h4>
                <p>832 Thompson Drive, San Fransisco CA 94107,US</p>
                <p>+123 345123 556 <br/>
                  +123 345123 556</p>
                  <p>
                  support@bookland.id
                  info@bookland.id
                  </p>
                  

              </div>
            </div>
            <hr  color="white"/>
            <div className='text-white col-xl-12 d-flex justify-content-between'>
            <p>Bookland Book Store Ecommerce Website - © 2022 All Rights Reserved</p>
            <span>Made with  by <span className='text-warning'> DexignZone</span></span>
            </div>
          </div>
         
        </div>

        
       
      </footer>
        
        </>
    )
}
export default Footer