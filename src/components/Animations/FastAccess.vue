<template>
  <div class="fast-access__item">
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
      border-image-slice: 3 3 3 3;
      border-image-width: 4px 4px 4px 4px;
      border-image-outset: 0px 0px 0px 0px;
      border-image-repeat: repeat repeat;
      // border-image-source: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIHZpZXdCb3g9IjAgMCA3NiA3NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI3NSIgaGVpZ2h0PSI3NSIgc3Ryb2tlPSJ1cmwoI3BhaW50MF9saW5lYXJfMV81MzIpIiBzdHJva2Utb3BhY2l0eT0iMC4yNSIvPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9Ijc1IiBoZWlnaHQ9Ijc1IiBzdHJva2U9InVybCgjcGFpbnQxX2xpbmVhcl8xXzUzMikiIHN0cm9rZS1vcGFjaXR5PSIwLjI1Ii8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMV81MzIiIHgxPSIwIiB5MT0iNzYiIHgyPSIzOC42MDMyIiB5Mj0iMzcuMzk2OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMkJEOUQ5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJCRDlEOSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xXzUzMiIgeDE9Ijc2IiB5MT0iMCIgeDI9IjM4LjYwMzIiIHkyPSIzNy4zOTY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMyQkQ5RDkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkJEOUQ5IiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K");
      border-image-source: url("@/assets/border.svg");
      
      border-style: solid;
      cursor: auto;
    }
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