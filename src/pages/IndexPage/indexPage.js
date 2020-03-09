import React,{Component} from 'react'

import Girl from './girl/girl'
import Title from './title/title'
//import Date from './date/date'
import Birds from './birds/birdsSVG'
import Clouds from './clouds/clouds'
import girlStyle from './girl/girl.module.css'
import styles from './indexPageStyle.module.css'
import ButterFly from './butterfly/butterfly'

import { connect } from "react-redux";

class IndexPage extends Component{
   render(){
    return(
        <div  className={this.props.blurred?`${styles.container} ${styles.blurContainer}`:styles.container}>
            <div className={girlStyle.animationContainer}>
                <Girl/>
                <ButterFly/>
            </div>
            <Birds/>
            <Clouds/>
            <Title/>
            <div>
                <canvas>
                    
                </canvas>
            </div>
            <div className={styles.util}
            >rit.utsav</div>
            <div className={styles.socialContainer}>
                        <a href="https://www.instagram.com/rit.utsav" target="_blank"
                        rel="noopener noreferrer"><img src="/img/insta.png" alt="social"/>
                        {this.props.blurred}
                        </a>
                        <a href="https://www.facebook.com/rituofficial" target="_blank"
                        rel="noopener noreferrer"><img src="/img/facebook.png" alt="social"/></a>
                        <a href="mailto:ritu@rit.ac.in" target="_blank"
                        rel="noopener noreferrer"><img src="/img/mail.png" alt="mailID"/></a>
                        <a href="http://ca.ritu20.com" target="_blank"
                        rel="noopener noreferrer"><img src="/img/car.png" alt="CA"/></a>
            </div>
        </div>);
   }
}

const mapStateToProps = ({ blurred }) => {
    return { blurred };
  };

export default connect(mapStateToProps,null)(IndexPage);