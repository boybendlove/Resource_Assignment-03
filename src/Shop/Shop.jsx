import React, { useEffect, useState } from 'react';
import Product from './Productlist/Productlist';

function Shop(props) {

    const [productlist, setProductlist] = useState([])
  
    useEffect(() => {

        const fetchAllData =  () => {
            fetch("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74")
            .then(response => response.json())
            .then(data => 

            setProductlist(data)

            ) 

        }

        fetchAllData()

    }, [productlist])
    
    // console.log(productlist._id)

    return (
        <div className="container">
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="h2 text-uppercase mb-0">Shop</h1>
                        </div>
                        <div className="col-lg-6 text-lg-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                 <Product productlist={productlist} />
              
            </section>
        </div>
    );
}

export default Shop;