<template>
  <div class="d-flex flex-column h-100">
    <!-- <Header></Header> -->
    <router-view/>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from '@/components/templates/Header'
import Footer from '@/components/templates/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* main {
  padding-top: 56px;
} */
</style>
