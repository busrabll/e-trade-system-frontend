import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
    return (
        <div className='col-6 mb-3'>
            <div className="special-product-card mb-3">
                <div className='d-flex justify-content-between'>
                    <div>
                        <img src="images/special-img.png" alt="glasses" />
                    </div>
                    <div className='special-product-content'>
                        <h5 className="brand">Vogue</h5>
                        <h6 className="title">
                            5440s W65613 52
                        </h6>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="ffd700"
                        />
                        <p className="price">
                            <span className="red-p">$100</span> &nbsp; <strike>$200</strike>
                        </p>
                        <div className='discount-till d-flex align-items-center gap-10'>
                            <p className='mb-0'>
                            </p>
                        </div>

                        <Link className='button'>Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct;