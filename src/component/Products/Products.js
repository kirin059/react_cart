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
                        <div className="img_content" key={i}>
                            <img alt="product" class="product_img" src={a[i].src}/>
                            <div className="cart_img"><i class="fas fa-shopping-cart"></i></div>
                        </div>
                    );
                })
            }
        </div> 
    );
};

//export default Products;

function productProps(state) {
    return {
        state: state
    }
}
export default connect(productProps)(Products);