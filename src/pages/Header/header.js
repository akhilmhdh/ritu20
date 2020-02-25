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
            <span className={headerStyle.navToggle} onClick={()=>this.setState({active:!this.state.active})}>
                <Hamburgur/>
            </span>
            <Link to="/" className={headerStyle.logo}>
                <div>
                    <div><img src="/img/ritu2.png" alt="logo"/></div>
                   <div className={headerStyle.ritu}>Ritu<sup><sup>20</sup></sup></div>
                </div>
            </Link>
            <ul className={this.state.active?headerStyle.main:`${headerStyle.main} ${headerStyle.active}`}>
                <Link to="/" className={headerStyle.navItem} >
                    <li onClick={()=>this.setState({active:true})}>ABOUT</li>
                </Link>
                <Link to="/events/dept" className={headerStyle.navItem}>
                    <li onClick={()=>this.setState({active:true})}> EVENTS</li>
                </Link>
                <Link to="/workshops/dept" className={headerStyle.navItem}>
                    <li onClick={()=>this.setState({active:true})}>WORKSHOPS</li>
                </Link>
                <Link to="/" className={headerStyle.navItem}>
                <li onClick={()=>this.setState({active:true})}>TEAM</li>
                </Link>
                <Link to="/" className={headerStyle.socialContainer+" "+headerStyle.navItem}>
                            <li>
                                <a href="#"><img src="/img/insta.png" alt="social"/></a>
                                <a href="#"><img src="/img/facebook.png" alt="social"/></a>
                            </li>
                </Link>
                <span className={headerStyle.close} onClick={()=>this.setState({active:true})}></span>
            </ul>
        </nav>
    </div>)
   }
}

export default Header;