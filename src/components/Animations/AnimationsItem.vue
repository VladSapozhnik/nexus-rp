<template>
  <div class="animations-list_item list-item">
    <div class="list-item_image">
      <img :src="src" :alt="title" />
    </div>
    <h3 class="list-item_title" :style="{fontSize: `${fontSizeLength}px`}">{{ title }}</h3>
    <p class="list-item_name">Танец</p>
  </div>
</template>

<script>
export default {
  name: "AnimationsItem",
  props: {
    title: String,
    src: String,
    item: Object
  },
  computed: {
    fontSizeLength: function () {
      return this.title.length > 9 ? 10 / this.title.length * 10 : 10
    }
  },
}
</script>

<style lang="scss" scoped>
.list-item {
  cursor: pointer;
  position: relative;
  margin: 0 15px 10px;

  &_image {
    background: rgba(19, 26, 27, 0.7);
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 8px;

    img {
      filter: brightness(0) invert(1) opacity(15%);
      transition: all .3s;
    }
  }

  &_title {
    color: #E5FFFF;
    word-wrap: break-word;
    font-size: 10px;
    line-height: 12px;
  }

  &_name {
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    color: rgba(229, 255, 255, 0.4);
  }

  &:hover {
    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    &::before {
      background: radial-gradient(50% 50% at 50% 50%, rgba(43, 217, 217, 0.25) 0%, rgba(43, 217, 217, 0) 100%);
      opacity: 0.25;
    }

    .list-item {
      &_image {
        img {
          filter: opacity(100%);
        }
      }
    }
  }
}
</style>