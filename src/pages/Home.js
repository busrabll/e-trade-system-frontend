import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
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
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative p-3">
                <img src="images/main-01.webp"
                  className='img-fluid rounded-3'
                  alt="main banner"
                />
              </div>
              <div className="small-banner position-relative p-3">
                <img src="images/main-02.avif"
                  className='img-fluid rounded-3'
                  alt="main banner"
                />
              </div>
              <div className="small-banner position-relative p-3">
                <img src="images/main-03.avif"
                  className='img-fluid rounded-3'
                  alt="main banner"
                />
              </div>
              <div className="small-banner position-relative p-3">
                <img src="images/main-04.webp"
                  className='img-fluid rounded-3'
                  alt="main banner"
                />
              </div>
              <div className="small-banner position-relative p-3">
                <img src="images/main-05.avif"
                  className='img-fluid rounded-3'
                  alt="main banner"
                />
              </div>
              <div className="small-banner position-relative p-3">
                <img src="images/main-06.avif"
                  className='img-fluid rounded-3'
                  alt="main banner"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1='special-wrapper py-5 home-wrapper-2'>
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
      </Container>
      <Container class1='home-wrapper-2 py-5'>
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {
                services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
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
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home