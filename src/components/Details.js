import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {id, company, img, price, title, info, inCart} = value.detailProduct;
                    return(
                        <div className="continer py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* Product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 text-capitalize">
                                    <img src={img} alt="product" className="img-fluid"/>    
                                </div>
                                <div className="col-10 mx-auto col-md-6 text-capitalize">
                                    <h1>model: {title}</h1>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> 
                                        made by: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer> Back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                         cart
                                         disabled={inCart?true:false} onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart?'inCart': 'add to cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    
                }}
            </ProductConsumer>
        )
    }
}
