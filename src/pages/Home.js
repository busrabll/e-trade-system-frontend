import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-l py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img src="images/main-banner.png"
                  className='img-fluid rounded-3'
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUNNY DAYS</h4>
                  <Link className='button'>BUY NOW</Link>
                  <h5>Vogue</h5>
                  <p>
                    Prices starting from 2000 TL
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img src="images/product-1.png"
                    className='img-fluid rounded-3'
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUNNY DAYS</h4>
                    <h5>Vogue</h5>
                    <p>
                      Prices starting from 2000 TL
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img src="images/product-2.png"
                    className='img-fluid rounded-3'
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUNNY DAYS</h4>
                    <h5>Vogue</h5>
                    <p>
                      Prices starting from 2000 TL
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img src="images/product-3.png"
                    className='img-fluid rounded-3'
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUNNY DAYS</h4>
                    <h5>Vogue</h5>
                    <p>
                      Prices starting from 2000 TL
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-3">
                  <img src="images/product-4.png"
                    className='img-fluid rounded-3'
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUNNY DAYS</h4>
                    <h5>Vogue</h5>
                    <p>
                      Prices starting from 2000 TL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-1.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-2.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-3.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-4.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get factory default price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-5.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% protected payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center">
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>All Sunglasses</h6>
                    <p></p>
                  </div>
                  <img src="" alt="" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Woman</h6>
                    <p></p>
                  </div>
                  <img src="" alt="" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Men</h6>
                    <p></p>
                  </div>
                  <img src="" alt="" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Kid</h6>
                    <p></p>
                  </div>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div class="container-xxl">
          <div class="row">
            <div className="col-12">
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div class="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home