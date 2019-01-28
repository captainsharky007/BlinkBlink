<template>
  <footer class="bg-dark">
    <div class="container">
      <div class="row">
        <div class="col offset-md-1">
          <router-link to="/" exact>
            <img
              class="mt-32 mb-64"
              src="~@/assets/img/blink-blink-gray.svg"
              alt="BlinkBlink Eye training application"
            >
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col offset-md-1 text-white">
          <a
            href="mailto:hello@blinkblink.app"
            class="h3 mb-32 mb-md-16 d-md-inline-block d-block mr-32 text-white"
            style="font-size:1rem; line-height:20px;"
          >Contact Us</a>
          <h3
            class="d-block mb-32 mb-md-16 d-md-inline-block mr-32"
            style="font-size:1rem; line-height:20px;"
          >
            <router-link class="text-white" to="/privacy" exact>Privacy policy</router-link>
          </h3>
          <h3 class="mb-32 mb-md-16 d-md-inline-block" style="font-size:1rem; line-height:20px;">
            <router-link class="text-white" to="/terms" exact>Terms and conditions</router-link>
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col mb-16 mb-md-24 offset-md-1">
          <small>© 2019 blink blink app</small>
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
      };
      scrollToTop();
    }
  }
};
</script>
