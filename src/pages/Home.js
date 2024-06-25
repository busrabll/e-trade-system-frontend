import React from 'react'
import { NavLink, Link } from 'react-router-dom';

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
                  <h5>Vogue</h5>
                  <p>
                    Prices starting from 2000 TL
                  </p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img src="images/main-banner.png"
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
                  <img src="images/main-banner.png"
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
                  <img src="images/main-banner.png"
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
                  <img src="images/main-banner.png"
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
    </>
  )
}

export default Home