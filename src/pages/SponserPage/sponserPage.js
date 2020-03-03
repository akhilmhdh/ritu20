import React,{Component} from 'react'

import { connect } from 'react-redux';

import sponserPageStyle from './sponserPageStyle.module.css'

import Arrow from '../utils/arrow-back/arrow'
import CollegeLogo from '../utils/college-logo/collegeLogo'

class SponserPage extends Component{
  render(){
    return(
        <div className={sponserPageStyle.container}
        style={this.props.blurred?{filter:"blur(2px)"}:null}>
        <div className={sponserPageStyle.subContainer}>
            <Arrow path="/"/>
            <div className={sponserPageStyle.subContainer2}>
            <div className={sponserPageStyle.title}>Our Sponsors</div>
            <div>
            <div className={sponserPageStyle.sponserItem}>
               <img src="https://ritu20.blob.core.windows.net/media/snapchat-seeklogo.com.svg" alt="snapchat logo"/>
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
}


const mapStateToProps = ({ blurred }) => {
    return { blurred };
  };


export default connect(mapStateToProps,null)(SponserPage);