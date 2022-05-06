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
    text-align: center;
}
.container{
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}
.name{
    font-family: Roboto-bold;
    font-size: 6rem;
    margin: 1rem 0;
    letter-spacing: 2px;
    animation: 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards running GQWmA;
    color: #ccd6f6;
}
.intro{
    font-size: 2rem;
    color: #ccd6f6;
    color: #4fcdb5;
}

.name-enter-active, .name-leave-active {
  transition: all 1s ease-out 1s;
}
.name-enter-from, .name-leave-to {
  opacity: 0;
}
.intro-enter-active, .intro-leave-active {
  transition: all 1.5s ease-out 1s;
}
.intro-enter-from, .intro-leave-to {
  opacity: 0;
}
</style>