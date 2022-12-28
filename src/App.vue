<template>
  <div class="menu">
    <AnimationSelect />
    <Animations/>
  </div>

</template>

<script>
import Animations from "./components/Animations/Animations.vue";
// import {PerfectScrollbar} from 'vue3-perfect-scrollbar';
import AnimationSelect from "@/components/AnimationSelect.vue";

export default {
  name: 'App',
  components: {
    AnimationSelect,
    Animations,
    // PerfectScrollbar,
  },
}
</script>

<style lang="scss">

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("@/assets/bg.svg");
  background-size: cover;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: rgba(229, 255, 255, 0.4);
  overflow-y: hidden;

  .animated-wrap {
    max-height: 810px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      height: 100vh;
      width: 2px;
      display: block;
      background: linear-gradient(180deg, rgba(229, 255, 255, 0) 0%, #E5FFFF 50%, rgba(229, 255, 255, 0) 100%);
      opacity: 0.1;
      z-index: 2;
    }
  }

  .menu {
    display: flex;
    position: relative;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      width: 800px;
      height: 100vh;
      right: 0;
      top: 0;
      background: linear-gradient(270deg, #131A1B 0%, #131A1B 50%, rgba(19, 26, 27, 0) 100%);
      opacity: 0.95;
      z-index: -1;
    }
  }

  .select-animate {
    width: 150px;
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 30px;
    position: relative;
    transition: all .3s;

    &:hover {
      //&::before {
      //  background: linear-gradient(270.04deg, #131A1B 0.03%, rgba(229, 255, 255, 0) 99.97%);
      //  opacity: 0.25;
      //}

      .select-animate {
        &_title {
          color: #E5FFFF;

          opacity: 1;
        }

        svg {
          path {
            fill: #0cbe3b;
          }
        }
      }
    }

    &_logo {
      margin-bottom: 4px;

      path {
        fill: #0cbe3b !important;
      }

      fill: #0cbe3b !important;

      svg {
        path {
          fill: #0cbe3b !important;
        }
      }
    }
  }
}
</style>
