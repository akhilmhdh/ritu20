import React,{Component} from 'react';
import Swiper from 'swiper';
import axios from 'axios'
import {Route} from 'react-router-dom';

import WorkShopDetails from './WorkshopDetails/workShopDetails'
import EventDetails from './EventDetails/eventDetails'

import categoryListPageStyle from './categoryListPageStyle.module.css';



class CategoryListPage extends Component{
    constructor(props){
        super(props);
        this.state={events:null}
    }
    componentDidMount(){
      const {match:{params:{id,category}}}=this.props;
        axios.get(`http://test123.ritu20.com/${category}?dept=${id}`).then(res=>res.data)
        .then((data)=>{
            this.setState({events:data});
            // eslint-disable-next-line no-unused-vars
            const swiper = new Swiper('.swiper-container', {
              effect: 'coverflow',
              grabCursor: true,
              centeredSlides: true,
              slidesPerView: 'auto',
              lazy:true,
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true,
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
           if(this.state.events==null){return <div className={categoryListPageStyle.container}>Loading...</div>}
        return(
            <div className={categoryListPageStyle.container}>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                     {this.state.events.head.map((el,index)=>{
                         return(
                        <div className="swiper-slide"
                         style={{backgroundImage:`url(${el.image})`}}
                         onClick={()=>{
                           const url=this.props.match.params.category==="events"
                           ?`${this.props.match.url}/${index}/eventDetails`
                           :`${this.props.match.url}/${index}/workShopDetails`;
                           this.props.history.push(url)
                         }}
                        >
                           <div className={categoryListPageStyle.textContainer}>
                             <div className={categoryListPageStyle.title}>{el.name}</div>
                           </div>
                         </div>
                         )
                     })}
                </div>
              <div className={`swiper-pagination ${categoryListPageStyle.pagination}`}></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
            <Route path={`${this.props.match.path}/:index/eventDetails`} render={
              (props)=><EventDetails {...props} head={this.state.events.head} body={this.state.events.body}/>}/>
            <Route path={`${this.props.match.path}/:index/workshopDetails`} render={
              (props)=><WorkShopDetails {...props} head={this.state.events.head} body={this.state.events.body}/>}/>
          </div>
        )
       }
}

export default CategoryListPage;