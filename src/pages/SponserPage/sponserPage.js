import React from 'react'

import sponserPageStyle from './sponserPageStyle.module.css'

import Arrow from '../utils/arrow-back/arrow'
import CollegeLogo from '../utils/college-logo/collegeLogo'

const SponserPage =()=>{
    return(
        <div className={sponserPageStyle.container}>
        <div className={sponserPageStyle.subContainer}>
            <Arrow path="/"/>
            <div className={sponserPageStyle.subContainer2}>
            <div className={sponserPageStyle.title}>Our Sponsers</div>
            <div>
            <div className={sponserPageStyle.sponserItem}>
               <img src="/img/snapchat.png" alt="snapchat logo"/>
               <div>
                   <span style={{fontSize:"15px"}}>OFFICIAL CAMERA PARTNER</span>
                   <br/>SNAPCHAT
               </div>
            </div>
            </div>
        </div>
        </div>
        <div className={sponserPageStyle.colLog}><CollegeLogo/></div>
    </div>
    )
}

export default SponserPage