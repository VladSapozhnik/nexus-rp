<template>
  <div class="animations-list_item list-item" draggable="true" @dragstart="onDragStart($event)">
    <div class="list-item_image">
      <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M21.5416 23.0133C20.8241 22.1576 19.7332 22.0602 18.8399 22.7449C17.7844 23.5535 16.24 24.5926 14.9673 25.2693C14.55 23.9374 14.3694 22.1582 14.0332 20.7205L14.0616 12.4977C14.0616 12.4977 18.728 11.9082 20.0747 11.7129C21.5096 11.5849 21.7292 10.3776 21.4238 9.52991C21.3498 9.32379 19.4751 4.19003 19.1483 3.19793C18.8275 2.22452 17.9632 1.64637 16.8527 1.94479C15.8239 2.22113 15.5143 3.17075 15.828 4.1453C16.2655 5.5083 17.4304 8.80226 17.4304 8.80226L13.3424 9.33002L6.73257 7.97042C5.04963 6.26143 3.96635 4.35595 3.57329 1.59937C3.42885 0.58745 2.76112 -0.120948 1.55352 0.0172203C0.494511 0.138401 -0.124086 1.0869 0.0209438 2.09825C0.613494 6.2586 2.57169 9.77794 5.56523 12.1183V20.2584C3.51054 25.284 3.48627 30.4704 6.51532 35.0742C6.90957 35.6721 7.58203 36 8.26929 36C8.64696 36 9.02819 35.8998 9.37093 35.6953C10.3376 35.1115 10.6288 33.8901 10.0197 32.9637C8.34151 30.4144 7.56368 27.3203 8.40308 23.7194C8.53804 23.1401 9.0862 22.7335 9.70657 22.755H9.70835C10.2926 22.7749 10.7881 23.1679 10.9177 23.7126C11.2865 25.2534 11.4688 26.7546 11.7476 27.6917C12.294 29.5242 14.2043 29.8487 15.4202 29.2371C17.8922 27.9941 19.436 27.1023 21.2172 25.7965C22.1259 25.1311 22.2561 23.8655 21.5416 23.0133Z"
            fill="#E5FFFF" fill-opacity="0.15"/>
        <path
            d="M10.63 7.74561C12.3834 7.74561 13.8047 6.38595 13.8047 4.70873C13.8047 3.03151 12.3834 1.67185 10.63 1.67185C8.8767 1.67185 7.45535 3.03151 7.45535 4.70873C7.45535 6.38595 8.8767 7.74561 10.63 7.74561Z"
            fill="#E5FFFF" fill-opacity="0.15"/>
      </svg>
    </div>
    <h3 class="list-item_title">{{title}}</h3>
    <p class="list-item_name" >Танец</p>
  </div>
</template>

<script>
export default {
  name: "AnimationsItem",
  props: {
    title: String,
    svg: String,
  },
  methods: {
    onDragStart: function (e) {
      let id = e.target.getAttribute('id');
      console.log(id)
      // e.dataTransfer('id', id)
    }
  }
  // methods: {
  //   dragEz: function (e) {
  //     e.preventDefault();
  //   },
  //   drag: function (e) {
  //     // let id =;
  //     e.dataTransfer.setData('id', e.target.id)
  //   },
  //   drop: function (e) {
  //     let itemId = e.dataTransfer.getData('id')
  //     console.log(itemId)
  //   }
  // }
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
    transition: all .3s;
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
        path {
          transition: all .3s;
          fill: #2BD9D9;
          fill-opacity: 1;
        }
      }
    }
  }
}
</style>