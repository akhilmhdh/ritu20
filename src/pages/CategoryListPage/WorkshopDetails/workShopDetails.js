import React,{Component} from 'react';
//import { Link } from 'react-router-dom';

import workShopDetailsStyle from '../EventDetails/eventDetailsStyle.module.css'

const cvtJSON2HTML=(x)=>{
    return x.replace(/(?:\r\n|\r|\n)/g, '<br/>')
}

const Tab1=(props)=>{
    const url=(props.seats<=0 || props.available<=0 || props.mail ==="https://ritu20.com/")?null:props.mail;

    return(<div className={workShopDetailsStyle.tab1Container}>
        <div className={url?workShopDetailsStyle.submitBtn:
            `${workShopDetailsStyle.submitBtn} ${workShopDetailsStyle.submitBtnDisable}`}>
        <a href={props.mail}
         target="_blank"
         rel="noopener noreferrer"> 
        {url?props.online?"Submit Your Entry":"Register Now":"coming soon"}
        </a>
        </div>
        <div className={workShopDetailsStyle.price}>
            REG FEES: {props.fees}
        </div>
        <div className={workShopDetailsStyle.time}>
            DATE: {props.date} 
        </div>
        <div className={workShopDetailsStyle.time}>
        TIME: {props.time}
        </div>
        <div dangerouslySetInnerHTML={{__html:cvtJSON2HTML(props.details)}}
        className={workShopDetailsStyle.details}></div>
    </div>)
}

const Tab2=(props)=>{
    return(<div className={workShopDetailsStyle.tab3Container}>
        <ul>
            {props.contact.map((el,index)=>{
                return(<li key={index}>
                    <img src="/img/whatsapp.png" style={{width:"30px"}} alt="whatsapp"/>
                    {el.name}: <a href={`https://api.whatsapp.com/send?phone=+91${el.mob}`}>{el.mob}</a>
                </li>)
            })}
        </ul>
    </div>)
}

class workShopDetails extends Component{
    constructor(props){
        super(props);
        this.state={index:0}
        this.onClick=this.onClick.bind(this);
    }
    onClick(el){
        this.setState({index:Number(el.target.id)})
    }
    render(){
        const i=this.state.index;
        const {match:{params:{index}}}=this.props
        let component;
        switch (i) {
            case 1:
                component=<Tab2 contact={this.props.body[index].contacts}/>
                break;
            default:
                component=<Tab1 mail={this.props.body[index].reglink}
                details={this.props.body[index].description}
                fees={this.props.body[index].fees}
                date={this.props.body[index].date}
                time={this.props.body[index].time}/>
                break;
        }
        return(
            <div className={workShopDetailsStyle.container}>
               <div className={workShopDetailsStyle.blurContainer}></div>
                <div className={workShopDetailsStyle.tabContainer}>
                    <div className={workShopDetailsStyle.arrow}
                    onClick={()=>{this.props.click();
                        this.props.history.push(`/${this.props.match.params.category}/dept/${this.props.match.params.id}`)}}>
                        <img src="/img/close.png" alt="close"/>
                        <div>{this.props.head[index].name}</div>
                    </div>
                    <div className={workShopDetailsStyle.tabs}>
                        <div id="0" onClick={this.onClick} 
                        className={this.state.index===0?workShopDetailsStyle.active:null}>Details</div>
                        <div id="1" onClick={this.onClick}
                         className={this.state.index===1?workShopDetailsStyle.active:null}>Contact</div>
                    </div>
                    <div>   
                        {component}
                    </div>
                </div>
            </div>)
    }
}

export default workShopDetails;
