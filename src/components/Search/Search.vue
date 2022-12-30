<template>
  <input class="search" v-model="searchVal" placeholder="Поиск по названию"/>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SearchEl",
  data() {
    return {
      searchVal: '',
    }
  },
  async created() {
    this.searchVal = this.SEARCH;
  },
  computed: {
    ...mapGetters(['SEARCH', "ANIMATED_RESULT"]),
  },
  watch: {
    searchVal: function () {
      // this.searchHandler(this.searchVal)
      // this.searchHandler(this.searchVal);
      this.$store.dispatch('searchHandler', this.searchVal)
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  width: 288px;
  height: 41px;
  padding: 9px 32px 9px 9px;
  align-self: center;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.03);
  position: relative;
  font-size: 13px;
  line-height: 16px;
  color: rgba(229, 255, 255, 0.29);
  background-image: url("@/assets/search.svg");
  background-repeat: no-repeat;
  background-size: 23px 23px;
  background-position: right 9px top 50%;
  transition: all .3s;

  &::placeholder {
    color: rgba(229, 255, 255, 0.29);
  }

  &:focus {
    color: #E5FFFF;
    outline: none;
    background-image: url("@/assets/search-focus.svg");
  }
}
</style>