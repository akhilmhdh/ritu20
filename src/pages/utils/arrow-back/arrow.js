import React from 'react';
import {Link} from 'react-router-dom'

import arrowStyle from './arrowStyle.module.css'

const Arrow=(props)=>{
    return(
        <div style={props.click?{opacity:"0"}:{opacity:"1"}}>
        <Link to={props.path}>
            <div className={arrowStyle.container}></div>
        </Link>
        </div>
    )
}

export default Arrow;