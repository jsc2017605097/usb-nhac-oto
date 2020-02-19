import React from 'react';
import './phone.css';
export default function(){
    return(
        <a href="tel:+0866121839">
        <div className="phone" >
            <div className="ring">
                <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                    <div className="coccoc-alo-ph-circle"></div>
                    <div className="coccoc-alo-ph-circle-fill"></div>
                    <div className="coccoc-alo-ph-img-circle"></div>
                    <div className='sodt'>0866121839</div>
                </div>
            </div>
        </div>
        </a>
    )
}