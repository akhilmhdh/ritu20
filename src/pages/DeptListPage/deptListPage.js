import React,{Component} from 'react'
import Swiper from 'swiper'

import deptListPageStyle from './deptListPageStyle.module.css'

class DeptListPage extends Component{
    componentDidMount(){
      const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop:true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
     render(){
      return(
        <div className={deptListPageStyle.container}>
            <div class="swiper-container">
              <div class="swiper-wrapper">
              <div class="swiper-slide">Slides</div>
              <div class="swiper-slide">Slides</div>
              <div class="swiper-slide">Slides</div>
              <div class="swiper-slide">Slides</div>
              <div class="swiper-slide">Slides</div>
              <div class="swiper-slide">Slides</div>
              <div class="swiper-slide">Slides</div>
              <div class="swiper-slide">Slides</div>
              <div class="swiper-slide">Slides</div>
              <div class="swiper-slide">Slides</div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      )
     }
  };
  export default DeptListPage;