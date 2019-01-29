<template>
  <main class="bg-light">
    <div class="position-relative">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 offset-md-1 mt-16 mb-md-96 mb-64">
            <router-link to="/" exact>
              <img
                src="~@/assets/img/blink-blink-dark.svg"
                alt="BlinkBlink Eye training application"
              >
            </router-link>
            <h1 class="display-4 mb-16 mb-md-32 mt-64">Thank you!</h1>
            <p>We will contact you when app will be ready.</p>
          </div>
        </div>
      </div>
    </div>
    <hr class="d-none d-md-block m-0">
    <Footer></Footer>
  </main>
</template>

<style>
.benefit > h2 {
  line-height: initial;
}

.user,
.user-d {
  display: inline-block;
  margin-left: 16px;
  /* width: 16%; */
}
.user img,
.user-d img {
  width: 100%;
}
.user-1 {
  background-image: url("~@/assets/img/user-1.png");
}

@media screen and (max-width: 992px) {
  .user-wrapper {
    justify-content: space-between;
    display: flex;
  }
}

@media screen and (min-width: 992px) {
  .user-wrapper {
    justify-content: inline-block;
    display: flex;
  }
  .user,
  .user-d {
    display: inline-block;
    width: 64px;
  }
  .user-d img {
    padding: 0px;
  }
}
</style>


<script>
import Footer from "@/components/templates/Footer";
export default {
  components: {
    Footer
  }
};
</script>
