import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';

const OurStore = () => {
    const [grid, setGrid] = useState(4);

    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <Container class1="store-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Shop By Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Filter By</h3>
                            <div>
                                <h5 className="sub-title">Availability</h5>
                                <div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type='checkbox'
                                            value=""
                                            id=''
                                        />
                                        <label className='form-check-label' htmlFor="">
                                            In Stock (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type='checkbox'
                                            value=""
                                            id=''
                                        />
                                        <label className='form-check-label' htmlFor="">
                                            Out of Stock (0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control"
                                            style={{ height: "35px" }}
                                            id="floatingInput"
                                            placeholder="From"
                                        />
                                        <label htmlFor="floatingInput"></label>
                                    </div>
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control"
                                            style={{ height: "35px" }}
                                            id="floatingInput1"
                                            placeholder="To"
                                        />
                                        <label htmlFor="floatingInput1"></label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Colors</h5>
                                <div>
                                    <Color />
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type='checkbox'
                                            value=""
                                            id='color-1'
                                        />
                                        <label className='form-check-label' htmlFor="color-1">
                                            S (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type='checkbox'
                                            value=""
                                            id='color-2'
                                        />
                                        <label className='form-check-label' htmlFor="color-2">
                                            M (2)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Product Tags</h3>
                            <div>
                                <div className="product-tags d-flex flew-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        sunglasses
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        accessory
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        bestseller
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        new season
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Random Product</h3>
                            <div>
                                <div className="random-products mb-3 d-flex">
                                    <div className="w-50">
                                        <img
                                            src="images/randomproduct-1.png"
                                            className='img-fluid'
                                            alt="sunglasses"
                                        />
                                    </div>
                                    <div className="w-50">
                                        <h5>
                                            Vo 5440s 300580 52 Hailey Woman sunglasses
                                        </h5>
                                        <ReactStars count={5} size={24} value='3' edit={false} activeColor="ffd700" />
                                        <b>$ 300</b>
                                    </div>
                                </div>
                                <div className="random-products d-flex">
                                    <div className="w-50">
                                        <img
                                            src="images/randomproduct-2.png"
                                            className='img-fluid'
                                            alt="sunglasses"
                                        />
                                    </div>
                                    <div className="w-50">
                                        <h5>
                                            Vo 5440s 300580 52 Hailey Woman sunglasses
                                        </h5>
                                        <ReactStars count={5} size={24} value='3' edit={false} activeColor="ffd700" />
                                        <b>$ 300</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0 d-block' style={{ "width": "100px" }}>Sort By:</p>
                                    <select name="" defaultValue={"manual"} className='form-control form-select' id="">

                                        <option value="manual">Featured</option>
                                        <option value="best-selling">
                                            Best selling
                                        </option>
                                        <option value="title-ascending"> Alphabetically, A-Z</option>
                                        <option value="title-descending">
                                            Alphabetically, Z-A
                                        </option>
                                        <option value="price-ascending">Price, low to high</option>
                                        <option value="price-descending">Price, high to low</option>
                                        <option value="created-ascending">Date, old to new</option>
                                        <option value="created-descending">Date, new t old</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className="totalproducts mb-0">21 Products</p>
                                    <div className='d-flex gap-10 align-items-center grid'>
                                        <img onClick={() => { setGrid(3) }}
                                            src="images/icon-list.png"
                                            className='d-block img fluid'
                                            alt="grid" />
                                        <img onClick={() => { setGrid(4) }}
                                            src="images/icon-list.png"
                                            className='d-block img fluid'
                                            alt="grid" />
                                        <img onClick={() => { setGrid(6) }}
                                            src="images/icon-list.png"
                                            className='d-block img fluid'
                                            alt="grid" />
                                        <img onClick={() => { setGrid(12) }}
                                            src="images/icon-list.png"
                                            className='d-block img fluid'
                                            alt="grid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-list pb-5">
                            <div className="d-flex gap-10 flex-wrap">
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default OurStore;