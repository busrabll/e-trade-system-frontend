import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <div className='col-3'>
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
    )
}

export default ProductCard;