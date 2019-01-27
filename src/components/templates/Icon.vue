<template>
  <div class="icon-bg d-flex justify-content-center align-items-center">
    <div class="icon">
      <img :src="icon" :alt="name">
    </div>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data () {
    return {
      icon: require('@/assets/img/icons/' + this.$props.name + '.svg')
    }
  }
}
</script>

<style>
.icon-bg {
  width: 101px;
  height: 101px;
  background:url("~@/assets/img/icon-bg.svg");
}
</style>
