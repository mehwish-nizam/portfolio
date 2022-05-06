<template>
  <div class="main"> 
    <the-loader v-if="loading"></the-loader>
  <div v-else class="main-content">
    <the-header @change-component="change"></the-header>
    <div class="content">
      <component :is="activeScreen" @next="nextSection"></component>
    </div>
    <contact-handles></contact-handles>
  </div>
</div>
</template>
<script>
  import TheHeader from "./components/TheHeader.vue";
  import Homepage from "./components/Homepage.vue";
  import About from "./components/About.vue";
  import Skills from "./components/Skills.vue";
  import Work from "./components/Work.vue";
  import Contact from "./components/Contact.vue";
  import contactHandles from "./components/ContactHandles.vue";
  import TheLoader from "./components/Loader.vue";
  export default {
   components:{
     TheHeader,
     Homepage,
     About,
     Skills,
     Work,
     Contact,
     contactHandles,
     TheLoader
   },
   data(){
     return {
       activeScreen: null,
       loading: true
     }
   },
   mounted(){
     this.activeScreen = Homepage;
      this.showLoader();
   },
   methods:{
     change(component){
       this.activeScreen= component=='about'?About:
                          component=='skills'?Skills:
                          component=='work'?Work:
                          component=='contact'?Contact:
                          Homepage
     },
     showLoader(){
        setTimeout(()=>{
            this.loading=false;
        },2500);
      }
   }
 }
 </script>


<style lang="scss" scoped>
@import "./assets/icons.css";
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url(./assets/fonts/Roboto-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Roboto-bold";
  src: local("Roboto-bold"),
    url(./assets/fonts/Roboto-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "GreatVibes";
  src: local("GreatVibes"),
    url(./assets/fonts/GreatVibes-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "CabinSketch-bold";
  src: local("CabinSketch-bold"),
    url(./assets/fonts/CabinSketch-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Shrikhand";
  src: local("Shrikhand"),
    url(./assets/fonts/Shrikhand-Regular.ttf) format("truetype");
}
.main{
  background-color: #0a192f;
  color: white;
  padding: 2rem 4rem;
  font-family: Roboto;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  position: relative;
  box-sizing: border-box;
  &-content{
    width: 100%;
  }
}
.content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
}
</style>