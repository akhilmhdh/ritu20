import React from 'react';
import {Link} from 'react-router-dom'

import arrowStyle from './arrowStyle.module.css'

const Arrow=(props)=>{
    return(
        <Link to={props.path}>
            <div className={arrowStyle.container}></div>
        </Link>
    )
}

export default Arrow;