<template>
  <div class="header">
    <div class="header__left">
      <transition name="logo" appear>
        <div class="logo">
          <img src="../assets/logo.png" alt="" class="image" />
        </div>
      </transition>
    </div>
    <div class="header__right">
      <ul class="navigation">
        <transition name="about" appear>
          <li
            class="nav-item"
            :class="{ active: isActive('about') }"
            @click="select('about')"
          >
            About
          </li>
        </transition>
        <transition name="skills" appear>
          <li
            class="nav-item"
            :class="{ active: isActive('skills') }"
            @click="select('skills')"
          >
            Skills
          </li>
        </transition>
        <transition name="work" appear>
          <li
            class="nav-item"
            :class="{ active: isActive('work') }"
            @click="select('work')"
          >
            Work
          </li>
        </transition>
        <transition name="contact" appear>
          <li
            class="nav-item"
            :class="{ active: isActive('contact') }"
            @click="select('contact')"
          >
            Contact
          </li>
        </transition>
        <transition name="resume" appear>
          <li class="nav-item resume">
            <a
              class="resume-link"
              href="https://drive.google.com/file/d/1oT7rhVy9NvAJp3KEuEFK6GCyVh3ezBND/view"
              target="_blank"
              rel="noopener noreferrer"
              >Resume</a
            >
          </li>
        </transition>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
    };
  },

  methods: {
    select(tab) {
      this.selected = tab;
      this.$emit("change-component", tab);
    },
    isActive(tab) {
      return this.selected == tab;
    },
  },
};
</script>
<style lang="scss" scoped>
.about-enter-from,
.skills-enter-from,
.work-enter-from,
.contact-enter-from,
.resume-enter-from {
  transform: translateY(-400%);
}
.about-enter-to,
.skills-enter-to,
.work-enter-to,
.contact-enter-to,
.resume-enter-to {
  transform: translateY(0);
}
.about-enter-active {
  transition: all 0.2s ease-in;
}
.skills-enter-active {
  transition: all 0.4s ease-in;
}
.work-enter-active {
  transition: all 0.6s ease-in;
}
.contact-enter-active {
  transition: all 0.8s ease-in;
}
.resume-enter-active {
  transition: all 1s ease-in;
}
.logo-enter-from {
  opacity: 0;
}
.logo-enter-to {
  opacity: 1;
}
.logo-enter-active {
  transition: all 0.5s ease-in;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ccd6f6;
  position: fixed;
  width: 100%;
  // width: 87vw;
  box-sizing: border-box;
  z-index: 2;
  .logo {
    width: 8rem;
    img {
      width: 100%;
    }
  }
  &__right {
    margin-right: 10rem;
  }
}
.navigation {
  display: flex;
  list-style: none;
  margin: 0;
}
.nav-item {
  cursor: pointer;
  margin: 0 1rem;
  font-size: 1.6rem;
  .resume-link{
      color: #4fcdb5;
      border: 1px solid #4fcdb5;
      padding: .7rem 2rem;
      &:hover{
         background-color: #4fcdb5;
         color: #0a192f;
      }
  }
}
.nav-item:hover {
  color: #4fcdb5; 
}
.active {
  position: relative;
  color: #4fcdb5;
  padding-bottom: 0.5rem;
}
.active::after {
  content: "";
  width: 30%;
  height: 4px;
  background-color: #4fcdb5;
  /* background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%); */
  position: absolute;
  bottom: 0;
  left: 2px;
}
</style>