import React,{Component} from 'react'
import { Link } from 'react-router-dom';

import headerStyle from './headerStyle.module.css'

import Hamburgur from './menu/hamburgur'

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
            <span className={headerStyle.navToggle} 
             id={this.state.active?null:"navRotate"}
            onClick={()=>this.setState({active:!this.state.active})}>
                <Hamburgur/>
            </span>
            <Link to="/" className={headerStyle.logo}>
                <div><img src="/img/ritu2.png" alt="logo"/></div>
                <div className={headerStyle.ritu}>
                       <div>
                            Ritu<sup>20</sup>
                        </div>
                        <div>
                                Mar 19 - 22
                        </div>
                </div>
            </Link>
            <ul className={this.state.active?headerStyle.main:`${headerStyle.main} ${headerStyle.active}`}>
                <Link to="/about" className={headerStyle.navItem} >
                    <li onClick={()=>this.setState({active:true})}
                    className={window.location.pathname==="/about"?headerStyle.navFocusedItem:null}>ABOUT</li>
                </Link>
                <Link to="/events/dept" className={headerStyle.navItem}>
                    <li onClick={()=>this.setState({active:true})}
                className={window.location.pathname.slice(0,8)==="/events/"?headerStyle.navFocusedItem:null}> EVENTS</li>
                </Link>
                <Link to="/workshops/dept" className={headerStyle.navItem}>
                    <li onClick={()=>this.setState({active:true})}
                    className={window.location.pathname.slice(0,11)==="/workshops/"?headerStyle.navFocusedItem:null}>WORKSHOPS</li>
                </Link>
                <Link to="/team" className={headerStyle.navItem}>
                <li onClick={()=>this.setState({active:true})}
                 className={window.location.pathname==="/team"?headerStyle.navFocusedItem:null}>TEAM</li>
                </Link>
                <div className={headerStyle.socialContainer+" "+headerStyle.navItem}>
                            <li>
                                <a href="https://www.instagram.com/rit.utsav" target="_blank"
                                rel="noopener noreferrer"><img src="/img/insta.png" alt="social"/></a>
                                <a href="https://www.facebook.com/rituofficial" target="_blank"
                                rel="noopener noreferrer"><img src="/img/facebook.png" alt="social"/></a>
                            </li>
                </div>
            </ul>
            <div
                className={this.state.active?headerStyle.date:`${headerStyle.date} ${headerStyle.dateActive}`}
                >MAR 19 - 22</div>
        </nav>
    </div>)
   }
}

export default Header;