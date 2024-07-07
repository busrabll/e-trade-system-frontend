import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'
import Container from '../components/Container'

export const CompareProduct = () => {
    return (
        <>
            <Meta title={"Compare Products"} />
            <BreadCrumb title="Compare Products" />
            <Container class1="compare-product-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    src="images/cross.png"
                                    alt="cross"
                                    class="position-absolute cross img-fluid"
                                />
                                <div className="product-card-image">
                                    <img src="images/compare-product.png" alt="sunglasses" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Vo5582s 316773 53 Woman Sunglasses
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$ 100</h6>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>Vogue</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Type:</h5>
                                            <p>Sunglasses</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Availablity:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img
                                    src="images/cross.png"
                                    alt="cross"
                                    class="position-absolute cross img-fluid"
                                />
                                <div className="product-card-image">
                                    <img src="images/compare-product.png" alt="glasses" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Vo5582s 316773 53 Woman Sunglasses
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$ 100</h6>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>Vogue</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Type:</h5>
                                            <p>Sunglasses</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Availablity:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default CompareProduct;
