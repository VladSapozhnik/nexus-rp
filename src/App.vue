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
}
</style>
