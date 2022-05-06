<template>
  <a-carousel arrows>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <i class="icon icon-arrow-right-thin"></i>
      </div>
    </template>
    <div>
      <div class="work">
        <div class="image">
          <img src="../assets/images/nexter.png" alt="" />
        </div>

        <div class="work__details">
          <h2 class="project-name">NEXTER</h2>
          <div class="details">
            <p class="intro">
              Real state agency site for selling properties.
            </p>
            <p class="about-tools">Tools and Technologies</p>
            <ul class="technologies">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
              <li>VUEJS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="work">
        <div class="image">
          <img src="../assets/images/Natours.png" alt="" />
        </div>

        <div class="work__details">
          <h2 class="project-name">NATOURS</h2>
          <div class="details">
            <p class="intro">A website to attract and promote tourism.</p>
            <p class="about-tools">Tools and Technologies</p>
            <ul class="technologies">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="work">
        <div class="image">
          <img src="../assets/images/MShop.png" alt="" />
        </div>

        <div class="work__details">
          <h2 class="project-name">ECOM STORE</h2>
          <div class="details">
            <p class="intro">
              An Ecommerce site for selling computers and its accessories.
            </p>
            <p class="about-tools">Tools and Technologies</p>
            <ul class="technologies">
              <li>HTML5</li>
              <li>CSS3/SASS</li>
              <li>VUEJS</li>
              <li>Quasar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="work">
        <div class="image">
          <img src="../assets/images/trillo.png" alt="" />
        </div>

        <div class="work__details">
          <h2 class="project-name">TRILLO</h2>
          <div class="details">
            <p class="intro">
              A hotel booking site for tourists.
            </p>
            <p class="about-tools">Tools and Technologies</p>
            <ul class="technologies">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
              <li>VUEJS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </a-carousel>
</template>

<style lang="scss">
.ant-carousel {
  width: 100vw;
  padding-right: 4rem !important;
  .custom-slick-arrow {
    .icon {
      font-size: 2rem;
      color: white;
    }
  }
  .slick-dots-bottom {
    display: none !important;
  }
}
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
@keyframes bounce {
  0% {
    //   transform: translateY(0);
    object-position: top center;
  }
  100% {
    //   transform: translateY(-100%);
    object-position: top center;
  }
}
.work * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.work {
  position: relative;
  display: flex;
  align-items: center;
  margin: 2rem 14rem 0;
  .image {
    height: 72vh;
    overflow: hidden;
    position: relative;
    margin: 5rem 19rem 0 0;
    img {
      width: 100%;
      transition: top 5s ease-out 0s;

      &:hover {
        transform: translate(0, calc(-100% + 72vh));
        transition: 5s ease !important;
      }
    }
  }
  &__details {
    color: #ccd6f6;
    position: absolute;
    right: -6rem;
    .project-name {
      text-align: right;
      margin: 0.5rem 1rem;
      color: #4fcdb5;
      font-family: Roboto-bold;
    }
    .details {
      background-color: #112240;
      padding: 2rem 3rem;
      border-radius: 0.5rem;
      box-shadow: 1rem 2rem 3rem black;
      font-size: 1.7rem;
      .about-tools {
        color: #4fcdb5;
        font-family: Roboto-bold;
        margin: 1rem 0 0.5rem 0;
        font-size: 1.7rem;
      }

      .technologies {
        list-style: none;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .work {
    .image {
      margin-right: 1rem;
    }
  }
}
</style>