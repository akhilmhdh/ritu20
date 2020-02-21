import React,{Component} from 'react'
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
            <a href="#" className={headerStyle.logo}>ritu'20</a>
            <ul className={this.state.active?headerStyle.main:`${headerStyle.main} ${headerStyle.active}`}>
                <li>
                    <a href="#" className={headerStyle.navItem}>ABOUT</a>
                </li>
                <li>
                    <a href="#" className={headerStyle.navItem}>EVENTS</a>
                </li>
                <li>
                    <a href="#" className={headerStyle.navItem}>CONTACT</a>
                </li>
                <li>
                    <a href="#" className={headerStyle.navItem}>TEAM</a>
                </li>
            </ul>
        </nav>
    </div>)
   }
}

export default Header;