<template>
  <footer class="footer mt-auto pb-48 pt-32 py-lg-48 bg-light">
    <div class="container px-sm-0">
      <div class="row text-center">
        <div class="col-12 col-sm-auto mb-sm-48 mb-1">
          <span class="text-muted mr-sm-32">© 2019 by Jevgenijs Zaremba.</span>
        </div>
        <div class="col-12 col-sm-auto ml-auto">
          <a class="btn btn-link text-primary pr-0 p-0" v-on:click="scrollToTop">Back to top ↑</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop: function() {
      const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 8);
        }
      }
      scrollToTop();
    }
  }
}
</script>
