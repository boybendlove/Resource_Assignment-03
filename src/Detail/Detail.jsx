import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import alertify from 'alertifyjs'
import { addCart } from '../Redux/Action/ActionCart';
import {saveToStorage,getFromStorage} from '../API/Storage';

function Detail(props) {

    const [detail, setDetail] = useState([])

    const dispatch = useDispatch()

    //id params cho{} từng sản phẩm
    const {id} = useParams()

    //id_user được lấy từ redux
    const id_user = useSelector(state => state.Cart.id_user)

    const [product, setProduct] = useState([])


    //Phần này là để thay đổi số lượng khi mua sản phẩm
    const [text, setText] = useState(1)
    const onChangeText = (e) => {
        setText(e.target.value)
    }

    //Tăng lên 1 đơn vị
    const upText = () => {
        const value = parseInt(text) + 1

        setText(value)
    }

    //Giảm 1 đơn vị
    const downText = () => {

        const value = parseInt(text) - 1

        if (value === 0)
            return

        setText(value)
    }

    //Hàm này để lấy dữ liệu chi tiết sản phẩm
    useEffect(() => {

        const fetchData =  () => {

            fetch("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74")
            .then(response => response.json())
            .then(data => {
                const products = data.filter(o => o._id.$oid === `${id}`)
                console.log(products)
                setDetail(products)
            }          
            ) 

        }

        fetchData()

    }, [id])

    //Hàm này là Thêm Sản Phẩm
    const addToCart = () => {

        let id_user_cart = id_user


        const data = {
            idUser: id_user_cart,
            idProduct: detail[0]._id.$oid,
            nameProduct: detail[0].name,
            priceProduct: detail[0].price,
            count: text,
            img: detail[0].img1
        }

       
            const action = addCart(data)
            dispatch(action)



        alertify.set('notifier', 'position', 'bottom-left');
        alertify.success('Bạn Đã Thêm Hàng Thành Công!');
    }
    
    //Hàm này gọi các sản phâm cùng loại
    useEffect(() => {

        const fetchData =  () => {

            fetch("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74")
            .then(response => response.json())
            .then(data => {
                let products = [];
                if (detail && detail[0]){
            
                    products = data.filter(o => o.category === `${detail[0].category}`)
            
                }
                setProduct(products)
            }

    )}

        fetchData()

    }, [detail])
    console.log(product)
    return (
        <section className="py-5">

            <div className="container">
            {
                detail && detail.map(value => (
                <div className="row mb-5" >
                    <div className="col-lg-6">
                        <div className="row m-sm-0">
                            <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0">
                                <div className="owl-thumbs d-flex flex-row flex-sm-column" data-slider-id="1">
                                    <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src={value.img1} alt="..." /></div>
                                    <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src={value.img2} alt="..." /></div>
                                    <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src={value.img3} alt="..." /></div>
                                    <div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0"><img className="w-100" src={value.img4} alt="..." /></div>
                                </div>
                            </div>

                            <div id="carouselExampleControls" className="carousel slide col-sm-10 order-1 order-sm-2" data-ride="carousel">
                                <div className="carousel-inner owl-carousel product-slider">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={value.img1} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={value.img2} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={value.img3} alt="Third slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={value.img4} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h1>{value.name}</h1>
                        <p className="text-muted lead">{value.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} VND</p>
                        <p className="text-small mb-4">{value.short_desc}</p>
                         <ul className="list-unstyled small d-inline-block">
                                <li className="py-2 mb-3 bg-white text-muted"><strong className="text-uppercase text-dark">Category:</strong><a className="reset-anchor ml-2">{value.category}s</a></li>
                        </ul>
                            <br></br>
                        <div className="row align-items-stretch mb-4">
                            <div className="col-sm-5 pr-sm-0">
                                <div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
                                    <span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                                    <div className="quantity">
                                        <button className="dec-btn p-0" style={{ cursor: 'pointer' }}><i className="fas fa-caret-left" onClick={downText}></i></button>
                                        <input className="form-control border-0 shadow-0 p-0" type="text" value={text} onChange={onChangeText} />
                                        <button className="inc-btn p-0" style={{ cursor: 'pointer' }}><i className="fas fa-caret-right" onClick={upText}></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 pl-sm-0">
                                <a className="btn btn-dark btn-sm btn-block d-flex align-items-center justify-content-center px-0 text-white"
                                    onClick={addToCart} >Add to cart</a>
                            </div>
                            <a className="btn btn-link text-dark p-1 mb-4" href="#">
                                <i className="far fa-heart mr-2"></i>Add to wish list
                        </a>
                            
                        </div>
                    </div>
                </div>
                 ))
                }
                <br/>
                <ul className="nav nav-tabs border-0">
                    <li className="nav-item">
                        <a
                            className="nav-link fix_comment"
                            style={{backgroundColor: '#383838', color: '#ffffff'}}
                            >
                            Description</a>
                    </li>
                </ul>
                {
                detail && detail.map(value => (
                <div className="tab-content mb-5">
                            <div className="tab-pane fade show active">
                                <div className="p-4 p-lg-5 bg-white">
                                    <h6 className="text-uppercase">Product description </h6>
                                    <p className="text-muted text-small mb-0">{value.long_desc.toString()}</p>
                                </div>
                            </div>
                        
                </div>
                ))
                }
                <h2 className="h5 text-uppercase mb-4">Related products</h2>
                <div className="row">
                    {
                        product && product.map(value => (
                            <div className="col-lg-3 col-sm-6" key={value._id}>
                                <div className="product text-center skel-loader">
                                    <div className="d-block mb-3 position-relative">
                                        <Link className="d-block" to={`/detail/${value._id.$oid}`}>
                                            <img className="img-fluid w-100" src={value.img1} alt="..." />
                                        </Link>
                                        <div className="product-overlay">
                                            <ul className="mb-0 list-inline">
                                                <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark text-white"><i className="far fa-heart"></i></a></li>
                                                <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark text-white">Add to cart</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h6> <a className="reset-anchor" href="detail.html">{value.name}</a></h6>
                                    <p className="small text-muted">{value.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} VNĐ</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section >
    );
}

export default Detail;