<template>
  <div class="animated-wrap">
    <!--      <perfect-scrollbar>-->
    <div v-for="(item, index) of ANIMATED_CATEGORY_RESULT" @click="openAnimates(item.category), handlerClick(index)"
         :key="item.id" class="select-animate" :class="{'active': index === idActive}">
      <img class="select-animate_logo" :src="item.src" alt="item.src"/>
      <p class="select-animate_title">{{ item.title }}</p>
    </div>
    <!--      </perfect-scrollbar>-->
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AnimationSelect",
  data() {
    return{
      idActive: 0
    };
  },
  async created() {
    await this.GET_CATEGORY_ANIMATED();
  },
  computed: {
    ...mapGetters(['ANIMATED_CATEGORY_RESULT']),
  },
  methods: {
    ...mapActions(["GET_CATEGORY_ANIMATED", 'GET_ANIMATED_API']),
    openAnimates: function (category) {
      this.GET_ANIMATED_API(category);
    },
    handlerClick(index) {
      this.idActive = index;
    }
  },
}
</script>

<style lang="scss" scoped>
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

.select-animate {
  width: 150px;
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  //transition: all .3s;
  &:not(:last-child) {
    margin-bottom: 30px;
  }

  &_logo {
    margin-bottom: 4px;
    filter: brightness(0) invert(1) opacity(15%);
    transition: all .3s;
  }

  @media (max-height: 864px) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: transparent;
    pointer-events: none;
  }

  &:hover, &.active {
    &::before {
      background: linear-gradient(270.04deg, #131A1B 0.03%, rgba(229, 255, 255, 0) 99.97%);
      z-index: -1;
      opacity: .75;
    }
    .select-animate {
      &_logo {
        margin-bottom: 4px;
        filter: brightness(0) invert(1) opacity(100%);
      }

      &_title {
        color: #E5FFFF;
        opacity: 1;
      }
    }
  }
}
</style>