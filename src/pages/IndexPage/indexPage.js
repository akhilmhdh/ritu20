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
    </div>);
}

export default IndexPage;