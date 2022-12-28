<template>
  <div class="animated-wrap">
    <!--      <perfect-scrollbar>-->
    <div v-for="item of ANIMATED_CATEGORY_RESULT" @click="openAnimates(item.category)" :key="item.id" class="select-animate">
      <img class="select-animate_logo" :src="item.src"/>
      <p class="select-animate_title">{{ item.title }}</p>
    </div>
    <!--      </perfect-scrollbar>-->
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AnimationSelect",
  async created() {
    await this.GET_CATEGORY_ANIMATED();
  },
  computed: {
    ...mapGetters(['ANIMATED_CATEGORY_RESULT'])
  },
  methods: {
    ...mapActions(["GET_CATEGORY_ANIMATED", 'GET_ANIMATED_API']),
    openAnimates: function (category) {
      this.GET_ANIMATED_API(category);
    }
  },
}
</script>

<style lang="scss" scoped>

</style>