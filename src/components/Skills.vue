<template>
  <div class="holder">
      <div class="dot dot1 ">
       <img src="../assets/images/html.png" alt="" class="html">
      </div>
      <div class="dot dot2 ">
        <img src="../assets/images/css.png" alt="" class="css">
      </div>
      <div class="dot dot3 ">
        <img src="../assets/images/sass.png" alt="" class="sass">
      </div>
      <div class="dot dot4 ">
        <img src="../assets/images/javascript.png" alt="" class="javascript">
    </div>
    <div class="dot dot5 ">
      <img src="../assets/images/vue.png" alt="" class="vue">
    </div>
    <div class="dot dot6 ">
      <img src="../assets/images/react.png" alt="" class="react">
    </div>
      <ul class="titles">
        <li class="title1 title-animate">
          HTML
        </li>
        <li class="title2 title-animate">
          CSS
        </li>
        <li class="title3 title-animate">
          SASS
        </li>
        <li class="title4 title-animate left">
            JAVASCRIPT
        </li>
        <li class="title5 title-animate left">
            VUEJS
      </li>
      <li class="title6 title-animate left">
        REACTJS
      </li>
      </ul>
    </div>
</template>
<style lang="scss" scoped>
body {
  font-weight: 200;
}

div.holder {
  position: absolute;
    left: 40%;
    top: 50%; 
}
ul.titles {
  margin: 0;
  padding: 0;
  li {
    height: 9rem;
    width: 10rem;
    font-size: 1.5rem;
    line-height: 2em;
    list-style: none;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &.title1 {
      transform: translate3d(0,-125%,0);
    }
    &.title2 {
      transform: translate3d(0,0,0);
    }
    &.title3 {
      transform: translate3d(0,125%,0);
    }
    &.title4 {
      transform: translate3d(100%,-125%,0);
    }
     &.title5 {
      transform: translate3d(100%,0%,0);
    }
     &.title6 {
      transform: translate3d(100%,125%,0);
    }
    &.title-animate.title1 {
      animation: title-animate1 1s 1 1.2s forwards;
    }
    &.title-animate.title2 {
      animation: title-animate2 1.25s 1 1.4s forwards;
    }
    &.title-animate.title3 {
      animation: title-animate3 1.5s 1 1.8s forwards;
    }
    &.title-animate.title4 {
      animation: title-animate4 1.5s 1 2.2s forwards;
    }
    &.title-animate.title5 {
      animation: title-animate5 1.5s 1 1.8s forwards;
    }
    &.title-animate.title6 {
      animation: title-animate6 1.5s 1 2.2s forwards;
    }
  }
}

div.dot {
  background: #4fcdb5;
  border-radius: 100px;
  height: 9rem;
  overflow: hidden;
  position: absolute;
  width: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 50%;
  }
  &.dot1 {
    z-index: 30;
  }
  &.dot2 {
    z-index: 25;
  }
  &.dot3 {
    z-index: 20;
  }
  
  &.dot4 {
    z-index: 15;
  }
  &.dot5 {
    z-index: 10;
  }
  &.dot6 {
    z-index: 5;
  }
  &.dot1 {
    animation: pickup1 1.5s 1 forwards;
  }
  &.dot2 {
    animation: pickup2 1.5s 1 forwards;
  }
  &.dot3 {
    animation: pickup3 1.5s 1 forwards;
  }
  &.dot4 {
    animation: pickup4 1.5s 1 forwards;
  }
  &.dot5 {
    animation: pickup5 1.5s 1 forwards;
  }
  &.dot6 {
    animation: pickup6 1.5s 1 forwards;
  }
  
}
@media screen and (max-width: 700px) {
  div.dot {
    width: 7rem;
    height: 7rem;
  }
  ul.titles{
    li{
      height: 7rem;
      
    }
    .left{
        position: absolute;
        left: -6rem;
      }
  } 
}
@media only screen and (max-width: 450px) {
  div.dot{
    &.dot4{
      animation: pickup4sm 1.5s 1 forwards;
    }
    &.dot5{
      animation: pickup5sm 1.5s 1 forwards;
    }
    &.dot6{
      animation: pickup6sm 1.5s 1 forwards;
    }
  }
  ul.titles{
    li{
      font-size: 2.5rem;
      &.title-animate.title4 {
      animation: title-animate4sm 1.5s 1 2.2s forwards;
      }
      &.title-animate.title5 {
        animation: title-animate5sm 1.5s 1 1.8s forwards;
      }
      &.title-animate.title6 {
        animation: title-animate6sm 1.5s 1 2.2s forwards;
      }
    }
  }
}
// animation

@keyframes title-animate1 {
  0% {
    opacity: 0;
    transform: translate3d(0,-125%,0);
  }
  100% {
    opacity: 1;
    transform: translate3d(-50%,-125%,0);
  }
}
@keyframes title-animate2 {
  0% {
    opacity: 0;
    transform: translate3d(0,-0,0);
  }
  100% {
    opacity: 1;
    transform: translate3d(-50%,0,0);
  }
}
@keyframes title-animate3 {
  0% {
    opacity: 0;
    transform: translate3d(0,125%,0);
  }
  100% {
    opacity: 1;
    transform: translate3d(-50%,125%,0);
  }
}
@keyframes title-animate4 {
  0% {
    opacity: 0;
    transform: translate3d(400%, -125%,0);
  }
  100% {
    opacity: 1;
    transform: translate3d(300%,-125%,0);
  }
}
@keyframes title-animate5 {
  0% {
    opacity: 0;
    transform: translate3d(400%,0,0);
  }
  100% {
    opacity: 1;
    transform: translate3d(300%,0,0);
  }
}
@keyframes title-animate6 {
  0% {
    opacity: 0;
    transform: translate3d(400%,125%,0);
  }
  100% {
    opacity: 1;
    transform: translate3d(300%,125%,0);
  }
}

@keyframes title-animate4sm {
  0% {
    opacity: 0;
    transform: translate3d(400%, -125%,0);
  }
  100% {
    opacity: 1;
    transform: translate3d(240%,-125%,0);
  }
}
@keyframes title-animate5sm {
  0% {
    opacity: 0;
    transform: translate3d(400%,0,0);
  }
  100% {
    opacity: 1;
    transform: translate3d(240%,0,0);
  }
}
@keyframes title-animate6sm {
  0% {
    opacity: 0;
    transform: translate3d(400%,125%,0);
  }
  100% {
    opacity: 1;
    transform: translate3d(240%,125%,0);
  }
}

@keyframes pickup1 {
  0% {
    background: #4fcdb5;
    box-shadow: 0 0 0 rgba(0,0,0,.3);
    transform: scale3d(1,1,1) translate3d(50%,0,0);
  }
  50% {
    background: lighten(#4fcdb5,5);
    box-shadow: 0 100px 30px rgba(0,0,0,0.1);
    transform: scale3d(1.3,0.9,1) translate3d(50%,-150%,0);
  }
  100% {
    background: #4fcdb5;
    box-shadow: none;
    transform: scale3d(1,1,1) translate3d(-200%,-125%,0);
  }
}

@keyframes pickup2 {
  0% {
    background: #4fcdb5;
    box-shadow: 0 0 0 rgba(0,0,0,.4);
    transform: scale3d(1,1,1) translate3d(50%,0,0);
  }
  50% {
    background: lighten(#4fcdb5,3);
    box-shadow: 0 80px 20px rgba(0,0,0,0.15);
    transform: scale3d(1.15,0.9,1) translate3d(50%,-100%,0);
  }
  100% {
    background: #4fcdb5;
    box-shadow: none;
    transform: scale3d(1,1,1) translate3d(-200%,0,0);
  }
}

@keyframes pickup3 {
  0% {
    background: #4fcdb5;
    box-shadow: 0 0 0 rgba(0,0,0,.5);
    transform: scale3d(1,1,1) translate3d(50%,0,0);
  }
  50% {
    background: lighten(#4fcdb5,1);
    box-shadow: 0 60px 10px rgba(0,0,0,0.3);
    transform: scale3d(1.075,0.9,1) translate3d(50%,-50%,0);
  }
  100% {
    background: #4fcdb5;
    box-shadow: none;
    transform: scale3d(1,1,1) translate3d(-200%,125%,0);
  }
}

@keyframes pickup4 {
  0% {
    background: #4fcdb5;
    box-shadow: 0 0 0 rgba(88, 69, 69, 0.6);
    transform: scale3d(1,1,1) translate3d(50%,0,0);
  }
  50% {
    background: lighten(#4fcdb5,1);
    box-shadow: 0 40px 0px rgba(0,0,0,0.3);
    transform: scale3d(1.075,0.9,1) translate3d(50%,-125%,0);
  }
  100% {
    background: #4fcdb5;
    box-shadow: none;
    transform: scale3d(1,1,1) translate3d(200%,-125%,0);
  }
}
@keyframes pickup4sm{
  0% {
    background: #4fcdb5;
    box-shadow: 0 0 0 rgba(88, 69, 69, 0.6);
    transform: scale3d(1,1,1) translate3d(50%,0,0);
  }
  50% {
    background: lighten(#4fcdb5,1);
    box-shadow: 0 40px 0px rgba(0,0,0,0.3);
    transform: scale3d(1.075,0.9,1) translate3d(50%,-125%,0);
  }
  100% {
    background: #4fcdb5;
    box-shadow: none;
    transform: scale3d(1,1,1) translate3d(140%,-125%,0);
  }
}

@keyframes pickup5 {
  0% {
    background: #4fcdb5;
    box-shadow: 0 0 0 rgba(0,0,0,.5);
    transform: scale3d(1,1,1) translate3d(50%,0,0);
  }
  50% {
    background: lighten(#4fcdb5,1);
    box-shadow: 0 60px 10px rgba(0,0,0,0.3);
    transform: scale3d(1.075,0.9,1) translate3d(50%,-75%,0);
  }
  100% {
    background: #4fcdb5;
    box-shadow: none;
    transform: scale3d(1,1,1) translate3d(200%,0%,0);
  }
}
@keyframes pickup5sm{
  0% {
    background: #4fcdb5;
    box-shadow: 0 0 0 rgba(0,0,0,.5);
    transform: scale3d(1,1,1) translate3d(50%,0,0);
  }
  50% {
    background: lighten(#4fcdb5,1);
    box-shadow: 0 60px 10px rgba(0,0,0,0.3);
    transform: scale3d(1.075,0.9,1) translate3d(50%,-75%,0);
  }
  100% {
    background: #4fcdb5;
    box-shadow: none;
    transform: scale3d(1,1,1) translate3d(140%,0%,0);
  }
}
@keyframes pickup6 {
  0% {
    background: #4fcdb5;
    box-shadow: 0 0 0 rgba(0,0,0,.6);
    transform: scale3d(1,1,1) translate3d(50%,0,0);
  }
  50% {
    background: lighten(#4fcdb5,1);
    box-shadow: 0 40px 0px rgba(0,0,0,0.3);
    transform: scale3d(1.075,0.9,1) translate3d(50%,-25%,0);
  }
  100% {
    background: #4fcdb5;
    box-shadow: none;
    transform: scale3d(1,1,1) translate3d(200%,125%,0);
  }
}

@keyframes pickup6sm {
  0% {
    background: #4fcdb5;
    box-shadow: 0 0 0 rgba(0,0,0,.6);
    transform: scale3d(1,1,1) translate3d(50%,0,0);
  }
  50% {
    background: lighten(#4fcdb5,1);
    box-shadow: 0 40px 0px rgba(0,0,0,0.3);
    transform: scale3d(1.075,0.9,1) translate3d(50%,-25%,0);
  }
  100% {
    background: #4fcdb5;
    box-shadow: none;
    transform: scale3d(1,1,1) translate3d(140%,125%,0);
  }
}

</style>