import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Modal.scss';

const Modal = (props) => {

    
    return (
        <div className="Modal" backdrop="static">
            <div className="bg" onClick={(e) => {
                e.stopPropagation()
                props.dispatch({ type: 'modalClose' });
                document.body.style.overflow = "auto";
            }}>

                <div className="content" onClick={() => {
                document.body.style.display = "block";
            }}>
                    <h1>정기배송 장바구니에 담겼습니다.</h1>

                    <div className="loading_container">
                        <span className="loading_bar" style={{ width: '100px' }}></span>
                        <i class="fas fa-check"></i>
                        <i class="fas fa-check"></i>
                        <i class="fas fa-check"></i>
                    </div>

                    <div className="button_container">
                        <button className="put" onClick={(e) => {
                            e.stopPropagation()
                            props.dispatch({ type: 'modalClose' })
                            document.body.style.overflow = "auto";
                        }}>계속 담기</button>
                        <button className="check">장바구니 확인</button>
                    </div>
                </div>
                
            </div>
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