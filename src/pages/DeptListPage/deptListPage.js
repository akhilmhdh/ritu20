import React,{Component} from 'react'
import Swiper from 'swiper'

import deptListPageStyle from './deptListPageStyle.module.css'

const DeptList=['general','ece','cse','mech','eee','arch','civil','mca']

class DeptListPage extends Component{
    componentDidMount(){
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween:50,
        loop:true,
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
          renderBullet:(index,className)=>{
            return(`<img src=/depicons/${DeptList[index]}.png class=${className+" "+deptListPageStyle.deptIconIndex}/>`)
          }
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
            <div className="swiper-container">
              <div className="swiper-wrapper">
              {DeptList.map((el)=>{
                return(
                <div className="swiper-slide" 
                style={{backgroundImage:`url(/depicons/${el}.png)`}} 
                onClick={()=>{this.props.history.push(`/${this.props.match.params.category}/dept/${el}`)}}>
                </div>
                )
              })}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      )
     }
  };
  export default DeptListPage;