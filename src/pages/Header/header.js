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
               <li onClick={()=>this.setState({active:true})}>
                    <Link to="/" className={headerStyle.navItem} >ABOUT</Link>
                </li>
                <li onClick={()=>this.setState({active:true})}>
                    <Link to="/events/dept" className={headerStyle.navItem}>EVENTS</Link>
                </li>
                <li onClick={()=>this.setState({active:true})}>
                    <Link to="/workshops/dept" className={headerStyle.navItem}>WORKSHOPS</Link>
                </li>
                <li onClick={()=>this.setState({active:true})}>
                    <Link to="/" className={headerStyle.navItem}>TEAM</Link>
                </li>
            </ul>
        </nav>
    </div>)
   }
}

export default Header;