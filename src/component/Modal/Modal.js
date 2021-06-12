import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Modal.scss';

const Modal = (props) => {
    
    return (
        <div className="Modal">
            <div className="bg" onClick={() => {
                props.dispatch({ type: 'modalClose' });
                document.body.style.overflow = "auto";
            }}>

                <div className="content" onClick={() => {
                document.body.style.display = "block";
            }}>
                    <h1>정기배송 장바구니에 담겼습니다.</h1>

                    <div className="loading_bar">
                    <i class="fas fa-check"></i>
                    </div>

                    <div className="button_container">
                        <button className="put" onClick={() => {
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