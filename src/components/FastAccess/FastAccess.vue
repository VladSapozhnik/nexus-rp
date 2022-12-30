<template>
  <div class="fast-access__item"
       @dragover="onDragOver($event)"
       @drop="onDrop($event)"
       @dragenter="onDragEnter"
       draggable="true"
  >
    <div class="fast-access__images" :class="{active: title.length === 0 && name.length === 0}">
      <div v-if="title.length && name.length" class="fast-access__remove">x</div>
      <div class="fast-access__number">{{number}}</div>
    </div>
    <h3 class="fast-access__title">
      <span v-if="title.length">{{title}}</span>
      <span v-else>Анимация</span>
    </h3>
    <p class="fast-access__name">
      <span v-if="name.length">{{name}}</span>
      <span v-else>Отсутвует</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "FastAccess",
  props: {
    number: Number,
    title: String,
    name: String
  },
  methods: {
    onDrop: function (e) {
      e.preventDefault()
      console.log(e)
      // let id = e.dataTransfer.getData('id')
      // console.log(id)
    },
    onDragOver: function (e) {
      e.preventDefault()
      console.log(e)
    },
    onDragEnter: function () {
      console.log('bbb')
    }
  }
}
</script>

<style scoped lang="scss">
.fast-access {

  position: relative;

  &__item {
    cursor: pointer;
    margin: 0 15px 10px;
    position: relative;
  }

  &__images {
    background: rgba(19, 26, 27, 0.4);
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 8px;
    transition: all .3s;
    position: relative;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(225deg, rgba(43, 217, 217, 0.25) 0%, rgba(43, 217, 217, 0) 49.21%);
    min-height: 76px;
    &.active {
      border: 1px solid red;
      cursor: auto;
    }

    //border-image-source: linear-gradient(225deg, rgba(43, 217, 217, 0.25) 0%, rgba(43, 217, 217, 0) 49.21%), linear-gradient(45deg, rgba(43, 217, 217, 0.25) 0%, rgba(43, 217, 217, 0) 50.79%);

  }

  &__remove {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }

  &__number {
    position: absolute;
    bottom: 8px;
    right: 8px;
    font-style: italic;
    font-size: 18px;
    line-height: 22px;
    color: rgba(229, 255, 255, 0.15);
  }

  &__title {
    color: #E5FFFF;
    word-wrap: break-word;
    font-size: 10px;
    line-height: 12px;
  }

  &__name {
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    color: rgba(229, 255, 255, 0.4);
  }
}
</style>