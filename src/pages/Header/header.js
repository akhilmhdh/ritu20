import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import headerStyle from './headerStyle.module.css'

import Hamburgur from './menu/hamburgur'

import {blurFilter} from '../../Actions/blur' 

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            active:true
        }
    }
   render(){
    return(<div className={headerStyle.container}>
        <nav className={headerStyle.navContainer}>
            <Link to="/" className={!this.state.active?`${headerStyle.logo} ${headerStyle.blurredLogo}`:headerStyle.logo}>
                <div><img src="/img/ritu.png" alt="logo"/></div>
                <div className={headerStyle.ritu}>
                            Ritu<sup><sup>20</sup></sup>
                </div>
            </Link>
            <div
                className={this.state.active?headerStyle.date:`${headerStyle.date} ${headerStyle.dateActive}`}>
                    {/* MAR 19 <span style={{fontFamily:"harabararegular"}}>-</span> Mar 22 */}
                    COMING SOON
            </div>
            <span className={headerStyle.navToggle} 
             id={this.state.active?null:"navRotate"}
            onClick={()=>{this.props.blurFilter(this.state.active)
                this.setState({active:!this.state.active})}}>
                <Hamburgur/>
            </span>
            <ul className={this.state.active?headerStyle.main:`${headerStyle.main} ${headerStyle.active}`}>
                <Link to="/about" className={headerStyle.navItem} >
                    <li onClick={()=>{this.props.blurFilter(false)
                        this.setState({active:true})}}
                    style={window.location.pathname==="/about"?{opacity:"0.5"}:null}>ABOUT</li>
                </Link>
                <Link to="/sponsors" className={headerStyle.navItem}>
                <li onClick={()=>{this.props.blurFilter(false)
                        this.setState({active:true})}}
                style={window.location.pathname==="/sponsors"?{opacity:"0.5"}:null}>SPONSORS</li>
                </Link>
                <Link to="/events/dept" className={headerStyle.navItem}>
                <li onClick={()=>{this.props.blurFilter(false)
                        this.setState({active:true})}}
                style={window.location.pathname.slice(0,8)==="/events/"?{opacity:"0.5"}:null}> EVENTS</li>
                </Link>
                <Link to="/workshops/dept" className={headerStyle.navItem}>
                <li onClick={()=>{this.props.blurFilter(false)
                        this.setState({active:true})}}
                      style={window.location.pathname.slice(0,11)==="/workshops/"?{opacity:"0.5"}:null}>WORKSHOPS</li>
                </Link>
                <Link to="/team" className={headerStyle.navItem}>
                <li onClick={()=>{this.props.blurFilter(false)
                        this.setState({active:true})}}
                 style={window.location.pathname==="/team"?{opacity:"0.5"}:null}>TEAM</li>
                </Link>
                <div className={headerStyle.socialContainer+" "+headerStyle.navItem}>
                    <a href="https://www.instagram.com/rit.utsav" target="_blank"
                    rel="noopener noreferrer"><img src="/img/insta.png" alt="social"/></a>
                    <a href="https://www.facebook.com/rituofficial" target="_blank"
                    rel="noopener noreferrer"><img src="/img/facebook.png" alt="social"/></a>
                    <a href="mailto:ritu@rit.ac.in" target="_blank"
                        rel="noopener noreferrer"><img src="/img/mail.png" alt="mailID"/></a>
                    <a href="http://ca.ritu20.com" target="_blank"
                    rel="noopener noreferrer"><img src="/img/car.png" alt="CA"/></a>
                </div>
            </ul>
        </nav>
    </div>)
   }
}

export default connect(null,{blurFilter})(Header);