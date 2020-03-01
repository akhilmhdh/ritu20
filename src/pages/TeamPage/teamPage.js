import React from 'react';

import teamPageStyle from './teamPageStyle.module.css'
import Arrow from './../utils/arrow-back/arrow';


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

const TeamPage=()=>{
    return(
    <div className={teamPageStyle.container}>
        <div className={teamPageStyle.subContainer}>
        <div className={teamPageStyle.title}>TEAM</div>
        <div className={teamPageStyle.imgContainerSet}>
                <Template src="https://avatars.githubusercontent.com/u/31166322?v=4"
                href="https://github.com/akhilmhdh" name="Akhil Mohan" 
                role="Front End Developer"/>
                <Template src="https://avatars2.githubusercontent.com/u/31211464?v=4"
                href="https://github.com/dravog7" name="John Abraham" 
                role="Back End Developer"/>
                <Template src="https://avatars2.githubusercontent.com/u/48565910?v=4"
                href="https://github.com/ghubofsmaran" name="Smaran" 
                role="UI/UX Designer"/>
        </div>
        </div>
        <Arrow path="/"/>
    </div>
    )
}

export default TeamPage;