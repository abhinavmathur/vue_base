<template>
  <div class="app-layout">
    <header class="header">
      <div>
        <img src="../assets/logo.svg" alt="">
      </div>
      <div>My Shirt Shop</div>
    </header>
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavMenu from './NavMenu';

  export default {
    components: {
      NavMenu
    }
  }
</script>

<style lang="stylus">
  @import '../style/main'
  .router-link-active {
    border-bottom-color: $primary-color;
  }
</style>

<style lang="stylus" scoped>
  .header {
    .img {
      width: 64px;
      height: 64px;
    }
  }
</style>
