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
            <h2 class="text-primary mb-0">Limited offer</h2>
            <h2 class="mb-0">
              <span style="text-decoration: line-through; opacity:.5;">{{currency}}16.99</span>
              {{currency}}4.99
            </h2>
            <p class="mb-32">Only 3 days left.</p>
            <router-link class="btn btn-lg btn-block-xs btn-primary" to="/buy" role="button">Buy now</router-link>
          </div>

          <div class="col-12 col-md-6 p-0 d-block d-lg-none">
            <img class="w-100" src="~@/assets/img/guy-hero@2x.jpg" alt="Guy">
          </div>
        </div>
      </div>
    </div>
    <!-- <hr class="d-none d-md-block m-0"> -->
    <div class="bg-dark">
      <div class="container">
        <div class="row text-center py-64">
          <div class="col-12 col-sm-4 mb-48 mb-sm-0">
            <img src="~@/assets/img/guardian.svg" alt="Guardian">
          </div>
          <div class="col-12 col-sm-4 mb-48 mb-sm-0">
            <img src="~@/assets/img/life.svg" alt="iPhone life">
          </div>
          <div class="col-12 col-sm-4 mb-sm-0">
            <img src="~@/assets/img/forbes.svg" alt="Forbes">
          </div>
        </div>
      </div>
    </div>

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

    <div class="bg-dark how-it-works">
      <div class="container">
        <div class="row">
          <div class="col-12 offset-md-1 mt-md-64 mr-md-48">
            <h1 class="mt-64 mb-24 display-3 mt-md-64 text-light">How it works.</h1>
          </div>
          <div class="d-flex mb-16 col-12 col-lg-3 offset-md-1 align-items-start">
            <img class="mr-32 mt-2" src="~@/assets/img/icons/download.svg" alt="Download">
            <h2 class="mt-16 text-light">Download application</h2>
          </div>
          <div class="d-flex mb-16 col-12 col-lg-3 offset-md-1 offset-lg-0 align-items-start">
            <img class="mr-32 mt-2" src="~@/assets/img/icons/time.svg" alt="Reminders">
            <h2 class="mt-16 text-light">Set reminders and intervals</h2>
          </div>
          <div class="d-flex mb-32 col-12 col-lg-3 offset-md-1 align-items-start offset-lg-0">
            <img class="mr-32 mt-2" src="~@/assets/img/icons/circulate.svg" alt="Flex">
            <h2 class="mt-16 text-light">Follow exercise guide</h2>
          </div>
          <div class="col-12">
            <router-link
              class="btn btn-lg btn-block-xs btn-primary mb-64 mb-lg-128 offset-md-1"
              to="/buy"
              role="button"
            >Buy now</router-link>
          </div>
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
      <div class="row mb-64 mb-sm-128">
        <div class="col-12 col-md-4 mb-24">
          <div class="card shadow">
            <div class="card-body">
              <div class="mb-16">
                <img src="~@/assets/img/Star.svg" alt="Rating">
                <img src="~@/assets/img/Star.svg" alt="Rating">
                <img src="~@/assets/img/Star.svg" alt="Rating">
                <img src="~@/assets/img/Star.svg" alt="Rating">
                <img src="~@/assets/img/Star.svg" alt="Rating">
              </div>

              <p
                class="card-text"
              >I am 74 years old. Great product... can't believe the difference it makes. Highly recommended this product!</p>
              <h5 class="card-title mb-0">Anonymous</h5>
              <small>1 day ago</small>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-24">
          <div class="card shadow">
            <div class="card-body">
              <div class="mb-16">
                <img src="~@/assets/img/Star.svg" alt="Rating">
                <img src="~@/assets/img/Star.svg" alt="Rating">
                <img src="~@/assets/img/Star.svg" alt="Rating">
                <img src="~@/assets/img/Star.svg" alt="Rating">
                <img src="~@/assets/img/Star.svg" alt="Rating">
              </div>

              <p
                class="card-text"
              >I've had the application recently and I'm still trying it out. So far I am completely satisfied with the purchase, as the vision is definitely improved.</p>
              <h5 class="card-title mb-0">Serkan Gürses</h5>
              <small>1 week ago</small>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card shadow">
            <div class="card-body">
              <div class="mb-16">
                <img src="~@/assets/img/Star.svg" alt="Rating">
                <img src="~@/assets/img/Star.svg" alt="Rating">
                <img src="~@/assets/img/Star.svg" alt="Rating">
                <img src="~@/assets/img/Star.svg" alt="Rating">
                <img src="~@/assets/img/Star.svg" alt="Rating">
              </div>

              <p class="card-text">Easy to notice the difference. Great application.</p>
              <h5 class="card-title mb-0">Claudio Daniele</h5>
              <small>1 month ago</small>
            </div>
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
    <!-- Mobile -->
    <div class="bg-primary d-sm-none">
      <div class="container">
        <div class="row">
          <div class="col-12" style="background:#F8F4F3;">
            <h1 class="my-64">Expert review</h1>
          </div>
          <div class="col optometrist">
            <div class="spacer"></div>
            <div class="card shadow" style="margin-bottom:-56px; top:-50px;">
              <div class="card-body">
                <img src="~@/assets/img/quote.svg" alt="Quote">
                <p
                  class="card-text mt-24"
                >BlinkBlink application is probably the easiest and best way how to create a habit to relax your eyes.</p>
                <h5 class="card-title mb-0">Serkan Gürses</h5>
                <small>Ophthalmologist</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Desktop -->
    <div class="bg-primary d-none d-sm-block">
      <div class="container">
        <div class="row position-relative pt-sm-128">
          <div class="col-12 offset-md-1">
            <h1 class="mb-64 text-light">Expert review</h1>
          </div>
          <div class="col-5 offset-md-1">
            <img src="~@/assets/img/doctor.png" alt="Optometrist">
          </div>
          <div class="col-5">
            <div class="card shadow position-absolute" style="bottom:128px;">
              <div class="card-body">
                <img src="~@/assets/img/quote.svg" alt="Quote">
                <p
                  class="card-text mt-24"
                >BlinkBlink is probably the best way how to create habit to relax your eyes.</p>
                <h5 class="card-title mb-0">Christopher Thompson</h5>
                <small>Optometrist</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary">
      <div class="container pb-64 pt-128">
        <div class="row">
          <div class="col offset-md-1">
            <h1 class="text-light display-4 mb-24">14 day
              <br>money-back
              <br>guarentee.
            </h1>
            <p class="text-light">If you don’t like the app, we’ll grant you a full refund.
               <br class="d-none d-lg-block"> No questions asked.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-dark text-light position-relative">
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
            <h2 class="text-primary mb-0">Limited offer</h2>
            <h2 class="mb-0">
              <span style="text-decoration: line-through; opacity:.5;">{{currency}}16.99</span>
              {{currency}}4.99
            </h2>
            <p class="mb-32">Only 3 days left.</p>
            <router-link class="btn btn-lg btn-block-xs btn-primary" to="/buy" role="button">Buy now</router-link>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
    <div class="modal" tabindex="-1" role="dialog" id="popup">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="container">
            <div class="row text-center" id="success" style="display:none;">
              <p class="px-48 pt-48 w-100">Check your email!</p>
              <button
                  type="button"
                  class="btn btn-primary btn-lg mb-32 mx-auto"
                  data-dismiss="modal"
                >Close
                </button>
            </div>
            <div class="row" id="form">
              <div class="position-absolute p-24" style="right:0px; z-index:1;">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <img src="~@/assets/img/close.svg" alt="Close">
                </button>
              </div>

              <div class="col-12 col-sm-6 p-32">
                <h1>Get a free <br>PDFeBook.</h1>
                <p>Packed with free illustrated eye exercises. Just enough to get you started.</p>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    id="pdfemail"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                  >
                  <div id="pdferror" style="display:none;">
                    <small class="text-danger">This email is not valid.</small>
                  </div>
                </div>
                <button
                  type="button"
                  id="pdfbtn"
                  v-on:click="submitEmail"
                  class="btn btn-primary btn-block btn-lg"
                >Get a free eBook</button>
                <button
                  type="button"
                  class="btn text-dark text-center btn-block"
                  data-dismiss="modal"
                >No, thanks</button>
              </div>
              <div class="bg-primary col-12 col-sm-6 d-flex align-items-center">
                <img
                  class="p-24"
                  width="100%"
                  height="auto"
                  src="~@/assets/img/freepdf.png"
                  alt="Free pdf"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.optometrist {
  background-image: url("~@/assets/img/doctor.png");
  /* background-size:cover; */
  background-size: 100% auto;
  background-repeat: no-repeat;
}

.spacer {
  height: 90vw;
}

.benefit > h2,
.how-it-works h2 {
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
import bootstrap from "bootstrap/js/dist/modal";
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
  methods: {
    test: function() {
      $("#popup").modal("toggle");
    },
    submitEmail: function() {
      console.log(123);
      var email = $("#pdfemail").val();
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regex.test(email)) {
        $("#pdfbtn").attr("disabled", true);
        var navigate = this.$router;
        $.ajax({
          url:
            "https://us-central1-blinkblink-6aa01.cloudfunctions.net/addSubscriber/" +
            email
        })
          .done(function(data) {
            $('#form').hide();
            $('#success').show();
            console.log("Success!");
          })
          .fail(function() {
            $("#pdfbtn").attr("disabled", false);
          });
      } else {
        $("#pdfbtn").attr("disabled", false);
        $("#pdfemail").on("input propertychange", function() {
          $("#pdferror").hide();
        });
        $("#pdferror").show();
      }
    }
  },
  beforeMount() {
    axios
      .get("https://ipinfo.io")
      .then(response => (this.currency = response.country == "US" ? "$" : "$"));
  },
  mounted() {
    var popupShowed = false;

    $("body").mouseleave(function() {
      if (!popupShowed && document.body.clientWidth > 1000) {
        $("#popup").modal("toggle");
        popupShowed = true;
      }
    });

    if (!popupShowed) {
      window.onscroll = function(event) {
        var height = document.body.scrollHeight;
        if (
          !popupShowed &&
          (document.body.clientWidth < 999 &&
            15 < height / (height - this.scrollY))
        ) {
          console.log(height / (height - this.scrollY));
          popupShowed = true;
          $("#popup").modal("toggle");
        }
      };
    }
  }
};
</script>
