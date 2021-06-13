import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Products.scss';
import Data from '../../Data';
import { useHistory } from 'react-router';
//import Loading from './component/Loading';

const Products = (props) => {
    let history = useHistory();
    // async function ajax() {
    //     await axios.get('http://task.purplesto.re/api/cart-items', {
    //       headers: {
    //         // 'origin': 'http://task.purplesto.re/api/cart-items'
    //         // "Access-Control-Allow-Origin": "*"
    //         "Access-Control-Allow-Origin": 'http://task.purplesto.re/api/cart-items',
    //       }
    //     })
    //         .then(res => console.log(res))
    //         // <Loading />
    //       .catch(() => {
    //         console.log('failure')
    //       })
    //   }
      
    //   useEffect(() => {
    //      ajax()
    //   }, [])
    let [load, setLoad] = useState({
                                productList: [],
                                items: 0,
                                preItems: 0
                            })

    useEffect(() => {
        fetch(Data)
        .then((res) => {
            let result = res.data.slice(preItems, items);
            let copy = [...load]
            copy.productList = [...productList, ...result],
            setLoad(copy);
        });
        window.addEventListener("scroll", infiniteScroll, true);
    })

    infiniteScroll = () => {
        let scrollHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight
        );
        let scrollTop = Math.max(
          document.documentElement.scrollTop,
          document.body.scrollTop
        );
        let clientHeight = document.documentElement.clientHeight;
    
        if (scrollTop + clientHeight >= scrollHeight) {
          this.setState({
            preItems: this.state.items,
            items: this.state.items + 10,
          });
          this.componentDidMount();
        }
      };
    
    return (
        <div className="Products" >
            {
                props.state.map((a, i) => {
                    return (
                        <div className="product_container" key={i} onClick={() => {history.push('/cart-items/' + props.state[i].id) }}>
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