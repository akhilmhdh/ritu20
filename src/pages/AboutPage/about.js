import React,{Component} from 'react'

import aboutStyle from './aboutStyle.module.css'
import Arrow from '../utils/arrow-back/arrow'
import CollegeLogo from '../utils/college-logo/collegeLogo'
import { connect } from 'react-redux'

class AboutPage extends Component{
   render(){
    return(
        <div className={aboutStyle.container}
        style={this.props.blurred?{filter:"blur(2px)"}:null}>
            <div className={aboutStyle.subContainer}>
                <Arrow path="/"/>
                <div className={aboutStyle.subContainer2}>
                <div className={aboutStyle.title}>Ritu</div>
                <div className={aboutStyle.writeUpContainer}>
                    <p>
                    Ritu is one of the top mettle fests of Kerala boasting over 2000 footfalls per day for different events. Ritu is a unique and humongous technocultural fest that awes and thrills everyone by its own stature. It is a beautiful amalgamation of different technical events and cultural extravaganzas, which holds up the legacy and grandeur of RIT. And the fact that Ritu is the most awaited technocultural fest in Kottayam is a testimony in itself. Prancing through the path illuminated by the alumni, it is strenuous to match the caliber and legacy. However, with synergy and industriousness, we could outlive the expectations to date and hanker to pursue in the future.
                    </p>
                    <div className={aboutStyle.boldItems}>
                     <div className={aboutStyle.boldItem}>
                         <div className={aboutStyle.boldItem1}>60+</div><br/>
                         <div className={aboutStyle.boldItem2}>EVENTS</div>
                     </div>
                     <div className={aboutStyle.boldItem}>
                         <div className={aboutStyle.boldItem1}>8 Lakhs</div><br/>
                         <div className={aboutStyle.boldItem2}>WORTH CASH PRIZES</div>
                     </div>
                     <div className={aboutStyle.boldItem}>
                         <div className={aboutStyle.boldItem1}>150+</div><br/>
                         <div className={aboutStyle.boldItem2}>COLLEGES</div>
                     </div>
                </div>
                        </div>
                </div>
            </div>
            <div className={aboutStyle.colLog}><CollegeLogo/></div>
        </div>
    )
   }
}

const mapStateToProps = ({ blurred }) => {
    return { blurred };
  };


export default connect(mapStateToProps,null)(AboutPage);