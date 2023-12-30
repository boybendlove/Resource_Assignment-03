import React, { useEffect, useState } from 'react';
import Products from './Products';
// import ProductAPI from '../../API/ProductAPI';
import { Link } from 'react-router-dom';

function Product ({productlist}){
    // const {productlist} = props
const [category,setCategory] = useState("");
const [products,setProducts] = useState("");
const handlerCategory = (value) => {
    console.log("Value: ", value)

    setCategory(value)
}


 useEffect(() => {
    if(productlist.length !== 0){
        const fetchData =  () => {
        if(category === ('')){  {
            const product = productlist;
            console.log(product)
            setProducts(product)}
        }else{
            if (category === 'all'){
                        const product = productlist;
                        console.log(product)
                        setProducts(product);
            }else 
                 {
                const product = productlist.filter(o => o.category === `${category}`)
                setProducts(product)
               
            }

        }}

        fetchData()
    }else{
        const fetchAll =  () => {
            fetch("https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74")
            .then(response => response.json())
            .then(data => 

            setProducts(data)

            ) 

        }

        fetchAll()
    }
    }, [category])

    return (
        
  
        <div className="container p-0">
            <div className="row">
                <div className="col-lg-3 order-2 order-lg-1">
                    <h5 className="text-uppercase mb-4">Categories</h5>
                    <div className="py-2 px-4 bg-dark text-white mb-3"><strong className="small text-uppercase font-weight-bold">Apple</strong></div>
                    <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                        <li className="mb-2"><a className="reset-anchor" href="#"  onClick={() => handlerCategory('all')}>All</a></li>
                    </ul>
                    <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase font-weight-bold">IPHONE & MAC</strong></div>
                    <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                        <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('iphone')}>Iphone</a></li>
                        <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('ipad')}>Ipad</a></li>
                        <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('macbook')}>Macbook</a></li>
                    </ul>
                    <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase font-weight-bold">WIRELESS</strong></div>
                    <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
                        <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('airpod')}>Airpod</a></li>
                        <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('watch')}>Watch</a></li>
                    </ul>
                    <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase font-weight-bold">OTHER</strong></div>
                    <ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal mb-5">
                        <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('mouse')}>Mouse</a></li>
                        <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('keyboard')}>Keyboard</a></li>
                        <li className="mb-2"><a className="reset-anchor" href="#" onClick={() => handlerCategory('other')}>Other</a></li>
                    </ul>
                </div>
                <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                            <div className="row mb-3 align-items-center">

                                {/* ------------------Search----------------- */}
                                <div className="col-lg-4">
                                     <input 
                                         className="form-control form-control-lg" 
                                         type="search" 
                                          placeholder="Enter Search Here!"/>
                                      </div>
                                <div className="col-lg-8">
                                    <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                                        <li className="list-inline-item">
                                        <select className="selectpicker ml-auto">
                                            <option value="default">Default sorting</option>
                                            <option value="DownToUp">Price: Low to High</option>
                                            <option value="UpToDown">Price: High to Low</option>
                                      </select>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <section>
                     
                             <Products products={products}/>
                            </section>
                            <nav aria-label="Page navigation example" className="pt-5">
                             <ul className="pagination justify-content-center justify-content-lg-end">
                              <li className="page-item">
                                 <button className="page-link">
                                    <span>«</span>
                                   </button>
                             </li>
                            <div className="d-flex">            
                                <li className='page-item active'>
                                <a className="page-link">1</a>
                                 </li>
                             </div>
                              <li className="page-item">
                                <button className="page-link" >
                                  <span>»</span>
                                 </button>
                                </li>
                             </ul>
            <div className="pagination justify-content-center justify-content-lg-end">
                <p className="text-small text-muted mb-0">Showing 1–9 of results</p>
            </div>
        </nav>

                        </div>
                    </div>
                </div>

    )

}
export default Product;