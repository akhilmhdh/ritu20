import React from 'react'

import Girl from './girl/girl'
import Title from './title/title'
//import Date from './date/date'
import Birds from './birds/birdsSVG'
import Clouds from './clouds/clouds'

import girlStyle from './girl/girl.module.css'
import styles from './indexPageStyle.module.css'
import ButterFly from './butterfly/butterfly'


const IndexPage = ()=>{
    return(
    <div className={styles.container}>
        <div className={girlStyle.animationContainer}>
            <Girl/>
            <ButterFly/>
        </div>
        <Birds/>
        <Clouds/>
        <Title/>
        <div className={styles.util}
        >rit.utsav</div>
        <div className={styles.socialContainer}>
                    <a href="https://www.instagram.com/rit.utsav" target="_blank"
                    rel="noopener noreferrer"><img src="/img/insta.png" alt="social"/></a>
                    <a href="https://www.facebook.com/rituofficial" target="_blank"
                    rel="noopener noreferrer"><img src="/img/facebook.png" alt="social"/></a>
                    <a href="mailto: ritu@rit.ac.in" target="_blank"
                    rel="noopener noreferrer"><img src="/img/email.png" alt="mailID"/></a>
                    <a href="http://ca.ritu20.com" target="_blank"
                    rel="noopener noreferrer"><img src="/img/car.png" alt="CA"/></a>
        </div>
    </div>);
}

export default IndexPage;