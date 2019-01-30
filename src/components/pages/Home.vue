<template>
  <main class="bg-light">
    <div class="position-relative">
      <img
        class="position-absolute d-none d-lg-block"
        style="right:0; bottom:0px; height:100%;"
        src="~@/assets/img/guy-hero@2x.jpg"
        alt="Tired guy."
      >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5 offset-md-1 mt-16 mb-md-96">
            <router-link to="/" exact>
              <img
                id="logo"
                src="~@/assets/img/blink-blink-dark.svg"
                alt="BlinkBlink Eye training application"
              >
            </router-link>
            <h1 class="display-4 mb-16 mb-md-32 mt-64">Learn to take care of your eyes.</h1>
            <p
              class="mb-24"
            >Reduce eyestrain, dry eyes and headaches with guided eye relaxation exercises.</p>
            <h2 class="mb-32">Only {{currency}}4.99 per year.</h2>
            <router-link class="btn btn-lg btn-block-xs btn-primary" to="/buy" role="button">Buy now</router-link>
          </div>

          <div class="col-12 col-md-6 p-0 d-block d-lg-none">
            <img class="w-100" src="~@/assets/img/guy-hero@2x.jpg" alt="Guy">
          </div>
        </div>
      </div>
    </div>
    <hr class="d-none d-md-block m-0">

    <div id="eye-training-benefits" class="container">
      <div class="row mt-64">
        <div class="col col-md-6 offset-md-1 mt-md-64 mr-md-48">
          <h2
            class="display-3 d-none d-md-block mb-16"
          >Less stress and more clarity. Just 7 minutes a day.</h2>
          <div class="d-md-none">
            <h1 class="mb-16">Less stress
              <br>and more clarity.
            </h1>
            <h1 class="mb-16">Just 7 minutes a day.</h1>
          </div>
          <p
            class="mb-32"
          >Choose from curated exercise plans, designed with the help of experienced ophthalmologists.</p>
          <div class="container p-0">
            <div class="row mb-32">
              <div class="col-6 benefit">
                <img src="~@/assets/img/icons/circulate.svg" alt="Circulate">
                <h2 class="mt-16">Improved blood circulation</h2>
              </div>
              <div class="col-6 benefit">
                <img src="~@/assets/img/icons/flex.svg" alt="Flex">
                <h2 class="mt-16">Improved
                  <br>eye
                  <br class="d-md-none">flexibility
                </h2>
              </div>
            </div>
            <div class="row mb-64">
              <div class="col-6 benefit">
                <img src="~@/assets/img/icons/diamond.svg" alt="Diamond">
                <h2 class="mt-16">Stronger
                  <br class="d-md-none">focus
                </h2>
              </div>
              <div class="col-6 benefit">
                <img src="~@/assets/img/icons/eye-strain.svg" alt="Eye strain">
                <h2 class="mt-16">Reduced
                  <br class="d-md-none">eye strain
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-64">
          <img
            class="p-2"
            width="100%"
            src="~@/assets/img/phone-exercises@2x.png"
            alt="Eye Exercises."
          >
        </div>
      </div>
    </div>

    <div class="bg-primary position-relative">
      <img
        class="position-absolute d-none d-lg-block"
        style="bottom:-150px;"
        src="~@/assets/img/fig-leaf-1.png"
      >
      <img
        class="position-absolute d-none d-lg-block"
        style="right:0;top:-50px;"
        src="~@/assets/img/fig-leaf-3.png"
      >
      <div id="eye-exercise-app" class="container text-white mb-64">
        <div class="row pt-md-64">
          <div class="col-12 col-md-6 offset-md-1 mr-md-48">
            <h1 class="mt-64 mb-16 display-3 mt-md-64 text-light">Your personal eye
              <br class="d-none d-lg-block">trainer in your pocket.
            </h1>
            <p
              class="mb-32 text-light"
            >Follow our animated exercise guide and learn how to relax your eyes in just a few simple steps.</p>
          </div>
          <div class="col-12 col-md-4 mb-md-64">
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

    <div class="position-relative">
      <img
        class="position-absolute d-none d-lg-block"
        style="left:0; bottom:-150px;"
        src="~@/assets/img/fig-leaf-2.png"
      >
      <div id="grow-habit" class="container">
        <div class="row mt-64">
          <div class="col col-md-6 offset-md-1 mt-md-64 mr-md-48">
            <h2 class="mb-16 display-3">Grow the habit.
              <br>Stay motivated.
            </h2>

            <p
              class="mb-32"
            >With progress tracking, achievements and reminders, we’ll make sure you are not going to quit.</p>
          </div>
          <div class="col-12 col-md-4 mb-md-64">
            <img
              class="p-2"
              width="100%"
              src="~@/assets/img/phone-alerts@2x.png"
              alt="Eye training remainders."
            >
          </div>
        </div>
      </div>
    </div>

    <div id="stay-motivated" class="container">
      <div class="row">
        <div class="col offset-md-1">
          <h2
            class="mb-32 mt-64 mt-lg-256 safe-body display-2"
          >Thousands of people already report reduced eyestrain and even improved eyesight only after a week of persistent practice.</h2>
        </div>
      </div>
      <div class="row mb-128">
        <div class="col p-0 offset-md-1">
          <div class="user-wrapper">
            <div class="user-d d-none d-md-block">
              <img src="~@/assets/img/user-d-1.png" alt="User 1">
            </div>
            <div class="user-d d-none d-md-block">
              <img src="~@/assets/img/user-d-2.png" alt="User 1">
            </div>
            <div class="user-d d-none d-md-block">
              <img src="~@/assets/img/user-d-3.png" alt="User 1">
            </div>
            <div class="user-d d-none d-md-block">
              <img src="~@/assets/img/user-d-4.png" alt="User 1">
            </div>
            <div class="user">
              <img src="~@/assets/img/user-1.png" alt="User 1">
            </div>
            <div class="user">
              <img src="~@/assets/img/user-2.png" alt="User 2">
            </div>
            <div class="user">
              <img src="~@/assets/img/user-3.png" alt="User 3">
            </div>
            <div class="user">
              <img src="~@/assets/img/user-4.png" alt="User 4">
            </div>
            <div class="user d-sm-none">
              <img src="~@/assets/img/user-5.png" alt="User 5">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-dark text-light mb-64 mb-md-128 position-relative">
      <img
        class="position-absolute d-none d-lg-block"
        style="top:-150px; right:0;"
        src="~@/assets/img/fig-leaf-3.png"
      >
      <div id="start-now" class="container py-64">
        <div class="row">
          <div class="col offset-md-1">
            <h1 class="d-md-none display-4 mb-32">Give your eyes a break. Start today.</h1>
            <div class="d-none d-md-block">
              <h1 class="display-3">Give your eyes a break.</h1>
              <h1 class="display-3 mb-32">Start today.</h1>
            </div>
            <h2 class="mb-32">
              Only {{currency}}4.99
              per year.
            </h2>
            <router-link class="btn btn-lg btn-block-xs btn-primary" to="/buy" role="button">Buy now</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col offset-md-1">
          <h2 class="text-gray mb-16">Can eye exercises
            <br class="d-md-none">improve vision?
          </h2>
          <p
            class="body-small"
          >There is a lot of debate as to whether eye exercises can really improve your vision.</p>
          <p
            class="body-small"
          >There aren’t any scientific studies that show eye exercises can successfully restore your vision, but there’s a lot of hearsay evidence to the contrary, with countless people saying exercises have significantly improved their eyesight.</p>
          <p
            class="body-small mb-64 mb-md-128"
          >It's possible, that poor vision, headaches and dry eyes might be a sign of another medical condition that requires treatment. This is something that eye relaxation cannot account for, so please visit your doctor first.</p>
        </div>
      </div>
    </div>
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
import axios from "axios";
export default {
  components: {
    Footer
  },
  data() {
    return {
      currency: "$"
    };
  },
  beforeMount() {
    axios
      .get("https://ipinfo.io")
      .then(response => (this.currency = response.country == "US" ? "$" : "€"));
  }
};
</script>
