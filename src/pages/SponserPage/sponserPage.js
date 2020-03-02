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
            <div className={sponserPageStyle.title}>Our Sponsors</div>
            <div>
            <div className={sponserPageStyle.sponserItem}>
               <img src="/img/snapchat.png" alt="snapchat logo"/>
               <div>
                   SNAPCHAT<br/>
                   <span style={{fontSize:"15px"}}>Official Camera Partner</span>
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