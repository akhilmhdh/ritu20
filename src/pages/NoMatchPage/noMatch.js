import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import NoMatchStyle from './noMatchStyle.module.css'
import RituSpinner from '../utils/ritu-spinner/rituSpinner';

class  NoMatch extends Component{
    constructor(props){
        super(props);
        this.state=({redirect:false})
    }
    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 2000)
      }
    
      componentWillUnmount() {
        clearTimeout(this.id)
      }
    render(){
        return(
        <div className={NoMatchStyle.container}>
            <div className={NoMatchStyle.spinner}><RituSpinner/></div>
            <div>Oopz Page Does Not Exist</div>
            {this.state.redirect?<Redirect to="/"/>:null}
        </div>
        )
    }
}

export default NoMatch;