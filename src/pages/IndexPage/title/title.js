import React,{Component} from 'react'

import titleStyle from './titleStyle.module.css'

let i=0;
let j=0;
let k=0;

const seasons=["AUTUMN","SUMMER","WINTER","SPRING"]
const rand1=Math.floor(Math.random()*4)
const season=seasons[rand1];
seasons.splice(rand1,1);
const rand2=Math.floor(Math.random()*3)
const halfSeason=seasons[rand2].slice(0,4);
const target="MANMADE"

class Title extends Component{
    constructor(props){
        super(props);
        this.state={typing:" ",color:false,symbol:"|"}
        this.typingAnimation=this.typingAnimation.bind(this);
    }
    typingAnimation(){
        if(i<season.length*2){
            let temp;
                if(season[i]!==undefined){
                    temp=this.state.typing+season[i]
                }
                else{
                temp=season.slice(0,-(i+1-season.length))
                }
            this.setState({typing:temp})
            i++;
            i===season.length?setTimeout(this.typingAnimation.bind(this),1000):setTimeout(this.typingAnimation.bind(this),200)
            }
        else{
            if(k<halfSeason.length*2){
                let temp;
                    if(halfSeason[k]!==undefined){
                        temp=this.state.typing+halfSeason[k]
                    }
                    else{
                    temp=halfSeason.slice(0,-(k+1-halfSeason.length))
                    }
                this.setState({typing:temp})
                k++;
                k===halfSeason.length?setTimeout(this.typingAnimation.bind(this),800):setTimeout(this.typingAnimation.bind(this),150)
                }
                else{
                    if(j===0){this.setState({color:true})};
            if(j<target.length){
                let temp=this.state.typing+target[j]
                this.setState({typing:temp})
                j++;
                setTimeout(this.typingAnimation.bind(this),300)
            }
            else{
                clearTimeout();
                this.setState({typing:"MANMADE",symbol:"."})
            }
        }
        }
        }
    componentDidMount(){
        i=0;j=0;k=0;
       setTimeout(()=>this.typingAnimation(),1000);
    }

  render(){
    return(
        <div className={titleStyle.titleContainer}>
            <div className={titleStyle.titleOne}>THE BEST</div>
            <div className={titleStyle.titleTwo}>SEASON IS</div>
            <div className={this.state.color?`${titleStyle.titleThree} ${titleStyle.titleThreeAddon}`:titleStyle.titleThree}
            >{this.state.typing}
                <span className={this.state.symbol==="|"?titleStyle.blink:`${titleStyle.blink} ${titleStyle.blinkRed}`}>{this.state.symbol}</span>
            </div>
        </div>
        )
  }
}

export default Title;