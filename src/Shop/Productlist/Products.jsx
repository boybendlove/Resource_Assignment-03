import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Products.propTypes = {
//     products: PropTypes.array,
//     // sort: PropTypes.string
// };

// Products.defaultProps = {
//     products: [],
//     // sort: ''
// }

function Products(props) {

    const {products} = props
    // console.log(products)

    return (
        <div className="row">
            {
                products && products.map(value => (
                    <div className="col-lg-4 col-sm-6" key={value._id.$oid}>
                        <div className="product text-center">
                            <div className="position-relative mb-3">
                                <div className="badge text-white badge-"></div>
                                <Link className="d-block"  to={`/detail/${value._id.$oid}` }>
                                    <img className="img-fluid w-100" src={value.img1} alt="..." />
                                </Link>
                                <div className="product-overlay">
                                </div>
                            </div>
                            <h6> <a className="reset-anchor" href="detail.html">{value.name}</a></h6>
                            <p className="small text-muted">{value.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} VND</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Products;