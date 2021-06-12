import React from 'react';
import { connect } from 'react-redux';
import './Products.scss';

const Products = (props) => {
    console.log(props.state)
    return (
        <div className="Products" >
            {
                props.state.map((a, i) => {
                    return (
                        <div className="product_container" key={i}>
                            <div className="img_content">
                                <img alt="product" class="product_img" src={props.state[i].img}/>
                                <div className="cart_img" onClick={() => {
                                        props.dispatch({ type: 'modalOpen' })
                                        document.body.style.overflow = "hidden";
                                    }}>
                                    <i class="fas fa-shopping-cart"></i>
                                </div>
                            </div>

                            <div className="product_info">
                                <div>{ props.state[i].info }</div>
                                <div>{ props.state[i].weight }</div>
                                <div className="price">{ props.state[i].price }</div>
                            </div>
                        </div>
                    );
                })
            }
        </div> 
    );
};


function productProps(state) {
    return {
        state: state.reducer,
        modal: state.reducer2
    }
}
export default connect(productProps)(Products);