import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Container from '../components/Container';

const SingleProduct = () => {

    const props = {
        width: 400,
        height: 600,
        zoomWidth: 600,
        img: "https://cdn.dsmcdn.com/ty1386/product/media/images/prod/QC/20240626/23/b740b181-37ec-33d4-9bde-1e66eb0f25ee/1_org_zoom.jpg"
    };
    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text);
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    };
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />

            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-15">
                            <div><img src="https://cdn.dsmcdn.com/ty1386/product/media/images/prod/QC/20240626/23/4c73b8ac-f787-35df-a4f7-d531ab052ea8/1_org_zoom.jpg" className='img-fluid' alt="" /></div>
                            <div><img src="https://cdn.dsmcdn.com/ty1386/product/media/images/prod/QC/20240626/23/6afe3a71-5859-3ce0-b5da-56a57695951d/1_org_zoom.jpg" className='img-fluid' alt="" /></div>
                            <div><img src="https://cdn.dsmcdn.com/ty1387/product/media/images/prod/QC/20240626/23/6ccc2ae3-6b3c-3367-a913-f5f2aedb3240/1_org_zoom.jpg" className='img-fluid' alt="" /></div>
                            <div><img src="https://cdn.dsmcdn.com/ty1387/product/media/images/prod/QC/20240626/23/d1b265a3-4617-35c0-97ee-907c4e385834/1_org_zoom.jpg" className='img-fluid' alt="" /></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className='border-bottom'>
                                <h3 className='title'> Vo5585s W44/11 54 Sunglasses </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">$100</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars count={5} size={24} value='3' edit={false} activeColor="ffd700" />
                                    <p className='mb-0 t-review'>(2 Reviews)</p>
                                </div>
                                <a className='review-btn' href="#review">Write a Review</a>
                            </div>
                            <div className="border-bottom py-3">
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Type :</h3>
                                    <p className='product-data'>Glasses</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Brand :</h3>
                                    <p className='product-data'>Vogue</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Category :</h3>
                                    <p className='product-data'>Sunglasses</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tags :</h3>
                                    <p className='product-data'>Sunglasses</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availablity :</h3>
                                    <p className='product-data'>In Stock</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Size :</h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Color :</h3>
                                    <Color />
                                </div>
                                <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                    <h3 className='product-heading'>Quantity :</h3>
                                    <div className=''>
                                        <input
                                            type="number"
                                            name=""
                                            min={1}
                                            max={10}
                                            className='form-control'
                                            id=""
                                            style={{ width: "70px" }}
                                        />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0' type='submit'>
                                            Add to Cart
                                        </button>
                                        <button className='button signup'>Buy It Now</button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href="">
                                            <TbGitCompare className='fs-5 me-2' />
                                            Add to Compare
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <AiOutlineHeart className='fs-5 me-2' />
                                            Add to Wishlist
                                        </a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='product-heading'>Shipping & Returns :</h3>
                                    <p className='product-data'>
                                        Free shipping and returns available on all orders! <br /> We ship
                                        all Us domestic orders within <b>5-10 business days!</b>
                                    </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Copy Product Link :</h3>
                                    <a
                                        href="javascript:void(0);"
                                        onClick={() => {
                                            copyToClipboard("https://cdn.dsmcdn.com/ty1386/product/media/images/prod/QC/20240626/23/b740b181-37ec-33d4-9bde-1e66eb0f25ee/1_org_zoom.jpg")
                                        }}
                                    >
                                        Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Corporis eveniet alias, perferendis, iste mollitia ipsa
                                inventore aut temporibus rerum exercitationem, dolore
                                molestiae quam reprehenderit earum adipisci esse libero
                                natus ea.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="reviews-wrapper p-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 id='review'>Reviews</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                    </div>
                                </div>
                                {orderedProduct && (
                                    <div>
                                        <a className='text-dark text-decoration-underline' href="">Write a Review</a>
                                    </div>
                                )}
                            </div>
                            <div className="review-form py-4">
                                <h4>Write a Review</h4>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <ReactStars count={5} size={24} value='3' edit={true} activeColor="ffd700" />
                                    </div>
                                    <div>
                                        <textarea
                                            name=''
                                            id=''
                                            className='w-100 form-control'
                                            cols="30"
                                            rows="4"
                                            placeholder='Comments'
                                        ></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review">
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>Busra</h6>
                                        <ReactStars count={5} size={24} value='3' edit={false} activeColor="ffd700" />
                                    </div>
                                    <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis molestias fugiat iste expedita accusamus assumenda eum voluptatum temporibus animi dolorum aliquam enim nulla, qui, maxime quasi doloribus dolorem. Odio.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='popular-wrapper py-5 home-wrapper-2'>
                <div className="row">
                    <div className="col-12">
                        <h3 className='section-heading'>Our Popular Products</h3>
                    </div>
                </div>
                <div className='row'>
                    <ProductCard />
                </div>
            </Container >
        </>
    )
}

export default SingleProduct