import React from 'react';
import { connect } from 'react-redux';

const Modal = (props) => {
    return (
        <div className="Modal">
            {
                props.modal === true
                    ? (
                        <div className="bg" onClick={() => {
                            props.dispatch({type: 'modalClose'})
                        }}>
            
                            <div className="content">
                                <h1>정기배송 장바구니에 담겼습니다</h1>

                                <div className="loading_bar">      
                                </div>
                                
                                <div className="button_container">
                                    <button className="put" onClick={() => {
                                         props.dispatch({type: 'modalClose'})
                                    }}>계속담기</button>
                                    <button className="check">장바구니 확인</button>
                                </div>
                            </div>
                            
                        </div>
                    )             
                : null
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
export default connect(productProps)(Modal);