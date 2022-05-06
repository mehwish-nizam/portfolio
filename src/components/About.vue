<template>
    <div class="about">
        <a-row type="flex"  :gutter="[48,48]">
            <a-col :span="24">
                <transition name="heading" appear mode="out-in">
                    <div class="container">
                        <h2 class="heading">
                            About me
                        </h2>
                    </div>
                </transition>
                <transition name="text" appear mode="out-in">
                    <div class="container">
                        <div class="text">
                            <p>
                                I'm a Software Engineering Student at NED University and a front-end web developer located in Karachi.
                                I build interactive websites and cares deeply about user's experience. I have started working as a 
                                web developer during my studies and now I have one year experience in which I have worked on different projects,
                                for clients ranging from individuals and small-businesses all the way to large enterprise corporations.
                            </p>
                        </div>         
                    </div>
                </transition>
            </a-col>
            <!-- <a-col :span="8">
                <div class="about-img">
                    <img src="../assets/images/about.jpg" alt="">
                    <div class="img-cover">
                    </div>
                </div>       
            </a-col> -->
        </a-row>
         
    </div>
</template>
<script>

export default {

}
</script>
<style  scoped>

.container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  text-align: center;
}
.heading-enter-active, .heading-leave-active {
  transition: all .5s ease-out;
}
.heading-enter-from, .heading-leave-to {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform: translate(0%, 100%);
}

.text-enter-active, .text-leave-active {
  transition: all .5s ease-out;
}
.text-enter-from, .text-leave-to {
  clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
  transform: translate(0%, -100%);
}

.about *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.about{
    /* width: 90vw; */
    padding: 0 20rem;
}
.text{
    font-size: 2rem;
    line-height: 3.5rem;
}

.heading{
    color: #4fcdb5;
    font-family: Roboto-bold;
    font-size: 4rem;
    position: relative;
    margin-bottom: 3rem;
}
/* .heading::after{
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    width: 66%;
    left: 61%;
    height: 1px;
    background-color: #233554;
    transform: translate(-50%, -50%);
} */
/* .about-img{
    width: 100%;
    height: 100%;
    position: relative;
}
img{
    width: 100%;
    border-radius: 8px;
    filter: saturate(7);
}
.img-cover{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #4fcdb5;
    opacity: .3;
    border-radius: 8px;

}
.img-cover:hover{
    opacity: 0;
} */
/* .heading-enter-from,
.heading-leave-to{
    transform:  scale(4);

    opacity: 0;
}
.heading-enter-to,
.heading-leave-from{
    transform: scale(0);
    opacity: 1;
}
    .heading-enter-active {
        transition: all 1s ease-in-out;    
    } */
    .about{

        /* position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%); */
    }
    .bg-text{
        /* position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); */
    }
</style>