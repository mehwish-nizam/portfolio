<template>
    <div class="home">
        <transition name="name" appear mode="out-in" key="">
            <div class="container">
            <h2 class="name">
                Mehwish Nizam
            </h2>
            </div>
        </transition>
        
        <transition name="intro" appear>
            <div class="container">
                <p class="intro">
                    Software Engineer to be &amp; Front-end Developer
                </p>
            </div>
        </transition> 
    </div>
</template>

<style scoped>
.home{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}
.container{
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}
.name{
    font-family: Roboto-bold;
    font-size: 4rem;
    margin: 1rem 0;
    letter-spacing: 2px;
    animation: 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards running GQWmA;
    /* color: #4fcdb5;  */
    color: #ccd6f6;
}
.intro{
    font-size: 1.3rem;
    color: #ccd6f6;
    color: #4fcdb5;
}

/* .name-enter-from,
.name-leave-to{
    transform:  translateY(-10rem);
    opacity: 0;
}
.name-enter-to,
.name-leave-from{
    transform:  translateY(0);
    opacity: 1;
}
.name-enter-active {
    transition: all 1s ease-in-out;    
}
.intro-enter-from,
.intro-leave-to{
    transform:  translateY(10rem);
    opacity: 0;
}
.intro-enter-to,
.intro-leave-from{
    transform:  translateY(0);
    opacity: 1;
}
.intro-enter-active {
    transition: all 1s ease-in-out;    
} */

.name-enter-active, .name-leave-active {
  transition: all .5s ease-out;
}
.name-enter-from, .name-leave-to {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform: translate(0%, 100%);
}

.intro-enter-active, .intro-leave-active {
  transition: all 1s ease-out;
}
.intro-enter-from, .intro-leave-to {
  clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
  transform: translate(0%, -100%);
}
</style>