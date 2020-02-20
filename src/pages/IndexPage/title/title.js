import React from 'react'

import titleStyle from './titleStyle.module.css'

const Title=()=>{
    return(
    <div className={titleStyle.titleContainer}>
        <div className={titleStyle.titleOne}>THE BEST</div>
        <div className={titleStyle.titleTwo}>SEASON IS</div>
        <div className={titleStyle.titleThree}>MAN MADE</div>
    </div>)
}

export default Title;