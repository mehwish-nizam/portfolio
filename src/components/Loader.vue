<template>
  <transition name="loader">
    <div class="box">
      <div class="logo">
        <img src="../assets/logocrop.png" alt="" />
      </div>
    </div>
  </transition>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@keyframes bg {
  0% {
    background-size: 0 3px, 3px 0, 0 3px, 3px 0;
  }
  25% {
    background-size: 100% 3px, 3px 0, 0 3px, 3px 0;
  }
  50% {
    background-size: 100% 3px, 3px 100%, 0 3px, 3px 0;
  }
  75% {
    background-size: 100% 3px, 3px 100%, 100% 3px, 3px 0;
  }
  100% {
    background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
  }
}

.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: rotate(45deg) translate(-100%, -50%);
  width: 8rem;
  height: 8rem;
  background-repeat: no-repeat;
  background-image: linear-gradient(to right, #c9c9c9 100%, #c9c9c9 100%),
    linear-gradient(to bottom, #c9c9c9 100%, #c9c9c9 100%),
    linear-gradient(to right, #c9c9c9 100%, #c9c9c9 100%),
    linear-gradient(to bottom, #c9c9c9 100%, #c9c9c9 100%);
  background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  animation: bg 1.25s cubic-bezier(0.19, 1, 0.22, 1) 1;
  animation-play-state: running;
  .logo{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  transform: rotate(-45deg) translate(-50%, -50%);
  transform-origin: top left;
  }
}
img {
  width: 100%;
  
}
</style>