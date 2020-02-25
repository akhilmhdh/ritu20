import React from 'react';

import butterflyStyle from './butterflyStyle.module.css'

const ButterFly=()=>{
    return(
    <div className={butterflyStyle.butterfly3}>
        <div className={butterflyStyle.butterfly3_left}></div>
        <div className={butterflyStyle.butterfly3_body}></div>
        <div className={butterflyStyle.butterfly3_right}></div>
    </div>
    )
}

export default ButterFly;