import React,{Component} from 'react';
//import { Link } from 'react-router-dom';

import eventDetailsStyle from './eventDetailsStyle.module.css'

const cvtJSON2HTML=(x)=>{
    return x.replace(/(?:\r\n|\r|\n)/g, '<br/>')
}

const Tab1=(props)=>{
    const url=(props.seats<=0 && props.available<=0)?null:props.mail;
    
    return(<div className={eventDetailsStyle.tab1Container}>
        <div className={url!==undefined?eventDetailsStyle.submitBtn:
            `${eventDetailsStyle.submitBtn} ${eventDetailsStyle.submitBtnDisable}`}>
        <a href={url}
        target="_blank"
        rel="noopener noreferrer">
            {props.online?"Submit Your Entry":"Register Now"}
        </a>
        </div>
        <div className={eventDetailsStyle.price}>
            PRIZE: {props.prize}
        </div>
        <div className={eventDetailsStyle.time}>
            DATE: {props.date} 
        </div>
        <div className={eventDetailsStyle.time}>
        Reg Fee: {props.fees}
        </div>
        <div dangerouslySetInnerHTML={{__html:cvtJSON2HTML(props.details)}}
        className={eventDetailsStyle.details}></div>
    </div>)
}

const Tab2=(props)=>{
    return(<div className={eventDetailsStyle.tab2Container}>
        <ul>
            {props.rules.map((el,index)=>{
                return(<li key={index}>
                    {el}
                </li>)
            })}
        </ul>
    </div>)
}

const Tab3=(props)=>{
    return(<div className={eventDetailsStyle.tab3Container}>
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

class EventDetails extends Component{
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
                component=<Tab2 rules={this.props.body[index].rules}/>
                break;
            case 2:
                component=<Tab3 contact={this.props.body[index].contacts}/>
                break;
            default:
                component=<Tab1 mail={this.props.body[index].reglink}
                online={this.props.body[index].online}
                details={this.props.body[index].description}
                prize={this.props.body[index].prize}
                date={this.props.body[index].date}
                fees={this.props.body[index].fees}
                seats={this.props.body[index].seats}
                available={this.props.body[index].available}/>
                break;
        }
        return(
            <div className={eventDetailsStyle.container}>
               <div className={eventDetailsStyle.blurContainer}></div>
                <div className={eventDetailsStyle.tabContainer}>
                    <div className={eventDetailsStyle.arrow}
                    onClick={()=>{this.props.click();
                        this.props.history.push(`/${this.props.match.params.category}/dept/${this.props.match.params.id}`)}}>
                        <img src="/img/close.png" alt="close"/>
                        <div>{this.props.head[index].name}</div>
                    </div>
                    <div className={eventDetailsStyle.tabs}>
                        <div id="0" onClick={this.onClick} 
                        className={this.state.index===0?eventDetailsStyle.active:null}>Details</div>
                        <div id="1" onClick={this.onClick}
                         className={this.state.index===1?eventDetailsStyle.active:null}>Rules</div>
                        <div id="2" onClick={this.onClick}
                         className={this.state.index===2?eventDetailsStyle.active:null}>Contact</div>
                    </div>
                    <div>   
                        {component}
                    </div>
                </div>
            </div>)
    }
}

export default EventDetails;
