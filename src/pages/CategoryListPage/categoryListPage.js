import React,{Component} from 'react';
import Swiper from 'swiper';
import axios from 'axios'
import {Route} from 'react-router-dom';

import WorkShopDetails from './WorkshopDetails/workShopDetails'
import EventDetails from './EventDetails/eventDetails'

import categoryListPageStyle from './categoryListPageStyle.module.css';
import Arrow from '../utils/arrow-back/arrow';
import RituSpinner from '../utils/ritu-spinner/rituSpinner';
import CollegeLogo from '../utils/college-logo/collegeLogo';
import ComingSoon from '../utils/comingSoon/comingSoon'

const APIurl="https://rituback.azurewebsites.net/";

class CategoryListPage extends Component{
    constructor(props){
        super(props);
        this.state={events:null,click:false};
    }
    componentDidMount(){
      this.setState({click:false});
      const {match:{params:{id,category}}}=this.props;
        axios.get(`${APIurl}${category}?dept=${id}`).then(res=>res.data)
        .catch((err)=>{
          console.log(err);
        })
        .then((data)=>{
            this.setState({events:data});
            // eslint-disable-next-line no-unused-vars
            const swiper2 = new Swiper('.swiper-container-2', {
              effect: 'coverflow',
              grabCursor: true,
              centeredSlides: true,
              slidesPerView: 'auto',
              lazy:true,
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows : false,
              },
              pagination: {
                el: '.swiper-pagination',
                clickable:true,
                dynamicBullets:true
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
        });
      }
       render(){
           if(this.state.events==null){
             return <div className={categoryListPageStyle.spinnerContainer}>
                      <RituSpinner/>
                    </div>;
            }
          else if(this.state.events.body.length===0){
            return(
              <div className={categoryListPageStyle.comingSoonContainer}>
                <Arrow path={`/${this.props.match.params.category}/dept`} click={this.state.click}/>
                <ComingSoon/>
                <div className={categoryListPageStyle.colLogo}>
                  <CollegeLogo/>
                </div>
              </div>
            )
          }
          else{
            return(
              <div className={categoryListPageStyle.container}>
                <Arrow path={`/${this.props.match.params.category}/dept`} click={this.state.click}/>
                <div className="swiper-container-2">
                  <div className="swiper-wrapper">
                       {this.state.events.head.map((el,index)=>{
                           return(
                          <div className={`swiper-slide ${categoryListPageStyle.img_cards}`}
                          key={index}
                           onClick={()=>{
                             const url=this.props.match.params.category==="events"
                             ?`${this.props.match.url}/${index}/eventDetails`
                             :`${this.props.match.url}/${index}/workShopDetails`;
                             this.setState({click:true});
                             this.props.history.push(url)
                           }}
                          >
                            <div className={categoryListPageStyle.imgContainer}>
                              <img src={el.image} alt="images"/>
                            </div>
                            <div className={this.state.events.body.preevent?categoryListPageStyle.preEventShow:categoryListPageStyle.preEventHide}>PRE-EVENT</div>
                           </div>
                           )
                       })}
                  </div>
                <div className={`swiper-pagination ${categoryListPageStyle.pagination}`}></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
              <div className={categoryListPageStyle.colLogo}>
                  <CollegeLogo/>
              </div>
              <Route path={`${this.props.match.path}/:index/eventDetails`} render={
                (props)=><EventDetails {...props} head={this.state.events.head} body={this.state.events.body}
                click={()=>{this.setState({click:false})}}/>}/>
              <Route path={`${this.props.match.path}/:index/workshopDetails`} render={
                (props)=><WorkShopDetails {...props} head={this.state.events.head} body={this.state.events.body}
                click={()=>{this.setState({click:false})}}/>}/>
            </div>
          )
          }
       }
}

export default CategoryListPage;
