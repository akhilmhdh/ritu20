import React,{Component} from 'react';
import teamPageStyle from './teamPageStyle.module.css'
import Arrow from './../utils/arrow-back/arrow';
import CollegeLogo from './../utils/college-logo/collegeLogo'

const CommitteTemplate =(props)=>{
    return(
    <div className={teamPageStyle.comTempItem}>
        <a href={`tel:+91${props.number}`}>
        <div>{props.name}</div>
        <div>{props.position}</div>
        <div>{props.number}</div>
        </a>
    </div>
    )
}

const Tab1=(props)=>{
    return(<div className={teamPageStyle.tab1Container}>
            <div className={teamPageStyle.tab1SubContainer}>
            <CommitteTemplate name="Thoufeek Hussain" position="Student Coordinator" number="8921047381"/>
            <CommitteTemplate name="Gokul Kannan" position="Secretary" number="9744627890"/>
            <CommitteTemplate name="AZHAR" position="Chairman" number="9961727078"/>
            <CommitteTemplate name="Safia E K" position="Vice Chairperson" number="999594325"/>
            </div>
            <hr/>
            <div className={teamPageStyle.tab1SubContainer}>
            <CommitteTemplate name="Dr. A Praveen" position="Staff Coordinator" number="9495047173"/>
            <CommitteTemplate name="Dr. Sunil Kumar P R" position="Staff Coordinator" number="9447806446"/>
            </div>
         </div>)
}

const Tab2=(props)=>{
    return(<div className={teamPageStyle.tab2Container}>
        <div className={teamPageStyle.imgContainerSet}>
                <Template src="https://avatars.githubusercontent.com/u/31166322?v=4"
                href="https://github.com/akhilmhdh" name="Akhil Mohan" 
                role="Front End Dev"/>
                <Template src="https://avatars2.githubusercontent.com/u/31211464?v=4"
                href="https://github.com/dravog7" name="John Abraham" 
                role="Back End Dev"/>
                <Template src="https://avatars2.githubusercontent.com/u/48565910?v=4"
                href="https://github.com/ghubofsmaran" name="Smaran" 
                role="UI/UX Designer"/>
                <Template src="https://avatars1.githubusercontent.com/u/33503690?v=4"
                href="https://github.com/ko200" name="Vishnu KO" 
                role="UI/Front End (ca.ritu20)"/>
        </div>
    </div>)
}

const Template =(props)=>{
    return(          
        <div className={teamPageStyle.cards}> 
            <a href={props.href} target="_blank"
            rel="noopener noreferrer">  
            <div className={teamPageStyle.cardImg}>
                <img src={props.src} alt={props.name}/>
            </div>
            <div className={teamPageStyle.cardText}>
                <div>{props.name}</div>
                <div>{props.role}</div>
            </div>
            </a>
        </div>)
}

class TeamPage extends Component{
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
        let component;
        switch (i) {
            case 1:
                component=<Tab2/>
                break;
            default:
                component=<Tab1/>
                break;
            }
            return(
                <div className={teamPageStyle.container}>
                    <div className={teamPageStyle.subContainer}>
                    <Arrow path="/"/>
                    <div className={teamPageStyle.subContainer2}>
                    <div className={teamPageStyle.title}>TEAM</div>
                    <div className={teamPageStyle.tabs}>
                            <div id="0" onClick={this.onClick} 
                            className={this.state.index===0?teamPageStyle.active:null}>ORG</div>
                            <div id="1" onClick={this.onClick}
                                className={this.state.index===1?teamPageStyle.active:null}>WEB</div>
                        </div> 
                            {component}
                    </div>
                    </div>
                    <CollegeLogo/>
                </div>
                )
    }
}

export default TeamPage;
