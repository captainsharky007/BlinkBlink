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
            <h1 class="display-4 mb-16 mb-md-32 mt-64">
              It’s not done yet.
              Sorry.
            </h1>

            <p
              class="mb-16"
            >We are still working hard on building the app. Please leave your email below to find out when it's released.</p>
            <div class="input-group input-group-lg pr-md-128">
              <input
                type="email"
                class="form-control"
                placeholder="Enter your email"
                aria-label="Email"
              >
            </div>
            <div class="d-block mb-32">
              <small>Psst. Our first 500 users will get a cool bonus.</small>
            </div>
            <a class="btn btn-lg btn-block-xs btn-primary" href="#" role="button">Sign up</a>
          </div>
          <div class="col-12 col-md-4 mb-md-64 mt-16 d-none d-md-block">
            <img
              class="p-2 mb-32 mb-md-0"
              width="100%"
              src="~@/assets/img/phone-guide@2x.png"
              alt="Eye training guide."
            >
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
