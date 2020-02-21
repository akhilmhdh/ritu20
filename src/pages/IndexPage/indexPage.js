import React from 'react'

import Girl from './girl/girl'
import Title from './title/title'
import Date from './date/date'
import Birds from './birds/birdsSVG'

import girlStyle from './girl/girl.module.css'
import styles from './indexPageStyle.module.css'


const IndexPage = ()=>{
    return(
    <div className={styles.container}>
        <div className={girlStyle.animationContainer}>
            <Girl/>
        </div>
        <Birds/>
        <Title/>
        <Date/>
    </div>);
}

export default IndexPage;