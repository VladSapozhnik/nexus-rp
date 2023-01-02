<template>
  <div class="animations">
    <Search style="margin-bottom: 11px;"/>
    <h2 class="h2">Анимации</h2>
    <perfect-scrollbar class="animations-list animations-list_scrollbar">
      <AnimationsItem v-for="item of sortSearchItem" :key="item.id" :id="item.id" :title="item.title" :src="item.src"
                      class="animations-list_item"/>
    </perfect-scrollbar>
    <h2 class="h2">Быстрый доступ</h2>
    <p class="animations-info">Для добавления анимации в быстрый доступ - зажмите ЛКМ и перетащите анимацию в нужную
      ячейку</p>
    <div class="animations-list">
      <fast-access class="animations-list_item" v-for="(item, index) of fastAccessArray"
                   :title="item.title"
                   :name="item.name"
                   :number="index + 1"
                   :key="item.id"/>
    </div>
    <div class="animations-close"><span>esc</span> - Закрыть окно</div>
  </div>
</template>

<script>
import AnimationsItem from "@/components/Animations/AnimationsItem.vue";
import {PerfectScrollbar} from 'vue3-perfect-scrollbar';
import Search from "@/components/Search/Search.vue";
import {mapActions, mapGetters} from "vuex";
import FastAccess from "@/components/Animations/FastAccess.vue";

export default {
  name: "AnimationsEl",
  components: {FastAccess, AnimationsItem, PerfectScrollbar, Search},
  data() {
    return {
      fastAccessArray: [
        {
          id: 1,
          title: "Танцы",
          name: "Ча-ча-ча"
        },
        {
          id: 2,
          title: "",
          name: ""
        },
        {
          id: 3,
          title: "",
          name: ""
        },
        {
          id: 4,
          title: "",
          name: ""
        },
        {
          id: 5,
          title: "",
          name: ""
        },
        {
          id: 6,
          title: "",
          name: ""
        },
      ]
    }
  },
  async created() {
    await this.GET_ANIMATED_API();
  },
  computed: {
    ...mapGetters(["ANIMATE_RESULT", 'SEARCH']),
    sortSearchItem: function () {
      return this.ANIMATE_RESULT?.filter(item => item.title.toLowerCase().match(this.SEARCH.toLowerCase()));
    },
  },
  methods: {
    ...mapActions(['GET_ANIMATED_API']),
    test: function () {
      console.log(this.fastAccessArray[4].title)
      let a = 6 - this.fastAccessArray.length
      let isLength = this.fastAccessArray.length + a;
      console.log(isLength)
      this.fastAccessArray.length = isLength
      return this.fastAccessArray;
    }
  }
}
</script>

<style lang="scss" scoped>
.animations {
  max-width: 308px;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 18px 0 21px;

  .h2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #E5FFFF;
    margin-top: 19px;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    //margin-bottom: 19px;

    &_scrollbar {
      height: 100%;
    }

    &_item {
      width: calc(33.333% - 30px);
    }
  }

  &-info {
    max-width: 279px;
    text-align: center;
    margin: 0 auto 14px;
  }

  &-close {
    font-weight: 600;
    color: rgba(229, 255, 255, 0.4);
    cursor: pointer;

    span {
      text-transform: uppercase;
      font-weight: bold;
    }
  }
}
</style>