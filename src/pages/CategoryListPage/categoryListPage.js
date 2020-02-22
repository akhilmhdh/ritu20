import React,{Component} from 'react';
import Swiper from 'swiper';
import axios from 'axios'

import categoryListPageStyle from './categoryListPageStyle.module.css';



class CategoryListPage extends Component{
    constructor(props){
        super(props);
        this.state={events:null}
    }
    componentDidMount(){
        // eslint-disable-next-line no-unused-vars
        axios.get(`http://test123.ritu20.com/events?dept=${this.props.match.params.id}`).then(res=>res.data)
        .then((data)=>{
            this.setState({events:data});
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
                     {this.state.events.head.map((el)=>{
                         return(
                        <div className="swiper-slide"
                         style={{backgroundImage:`url(${el.image})`}}>
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
          </div>
        )
       }
}

export default CategoryListPage;