<template>
<div>
<transition name="handle" appear>
    <div class="contact">
        <a href="https://github.com/mehwish-nizam" target="_blank">
            <i class="icon icon-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mehwish-nizam/" target="_blank">
            <i class="icon icon-linkedin"></i>
        </a>
        <a href="mailto:mehwishnizam01@gmail.com" target="_blank">
            <i class="icon icon-gmail"></i>
        </a>
        <span></span>
    </div>
</transition>
</div>
</template>
<style scoped>
.handle-enter-from, .handle-leave-to{
    opacity: 0;
}
.handle-enter-to, .handle-leave-from{
    opacity: 1;
}
.handle-enter-active, .handle-leave-active{
    transition: all .5s ease-in 2s;
}
.contact{
    display: flex;
    margin-left: 5rem;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
}
a{
    color: white;
    text-decoration: none;
    margin: 1rem 0;
}
.icon{
    margin: 1rem 0;
    font-size: 3rem;
    cursor: pointer;
}
.icon-github:hover,
.icon-linkedin:hover,
.icon-gmail:hover{
    color: #4fcdb5;
}
span{
    width: 1px;
    height: 10vh;
    background-color: #ccc;
}
</style>