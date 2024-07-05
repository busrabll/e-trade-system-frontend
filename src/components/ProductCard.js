import { logDOM } from '@testing-library/react';
import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const { grid } = props
    let location = useLocation();
    return (
        <>
            <div
                className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link to=":id" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link><img src="images/wish.png" alt="wishlist" /></Link>
                    </div>
                    <div className="product-image">
                        <img src="images/product-01.png" className='img-fluid' alt="product image" />
                        <img src="images/product-02.png" className='img-fluid' alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className='brand'>Vogue</h6>
                        <h5 className="product-title">
                            VO4284S
                        </h5>
                        <ReactStars count={5} size={24} value='3' edit={false} activeColor="ffd700" />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}></p>
                        <p className="price">$100</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src="images/addcart.png" alt="addcart" />
                            </Link>
                            <Link>
                                <img src="images/view.png" alt="view" />
                            </Link>
                            <Link>
                                <img src="images/compareprod.png" alt="compare" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div
                className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link><img src="images/wish.png" alt="wishlist" /></Link>
                    </div>
                    <div className="product-image">
                        <img src="images/product-01.png" className='img-fluid' alt="product image" />
                        <img src="images/product-02.png" className='img-fluid' alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className='brand'>Vogue</h6>
                        <h5 className="product-title">
                            VO4284S
                        </h5>
                        <ReactStars count={5} size={24} value='3' edit={false} activeColor="ffd700" />
                        <p class="price">$100</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src="images/addcart.png" alt="addcart" />
                            </Link>
                            <Link>
                                <img src="images/view.png" alt="view" />
                            </Link>
                            <Link>
                                <img src="images/compareprod.png" alt="compare" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard;