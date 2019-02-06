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
                id="email"
                type="email"
                class="form-control"
                placeholder="Enter your email"
                aria-label="Email"
              >
            </div>
             <div id="error" style="display:none;">
              <small class="text-danger">This email is not valid.</small>
            </div>
            <div class="d-block mb-32">
              <small>Psst. Our first 500 users will get a cool bonus.</small>
            </div>
            <button
            id="btn"
              class="btn btn-lg btn-block-xs btn-primary"
              v-on:click="submitEmail"
              role="button"
            >Sign up</button>
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
import router from "@/router";
export default {
  components: {
    Footer
  },
  methods: {
    submitEmail: function() {
      var email = $("#email").val();
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regex.test(email)) {
        $('#btn').attr('disabled',true);
        var navigate = this.$router;
        $.ajax({
          url:
            "https://us-central1-blinkblink-6aa01.cloudfunctions.net/addSubscriber/" +
            email
        })
          .done(function(data) {
            navigate.push({ path: "thanks" });
          })
          .fail(function() {
           $('#btn').attr('disabled',false);
          });
      } else {
        $('#btn').attr('disabled',false);
         $('#email').on('input propertychange', function(){
              $('#error').hide();
            });
            $('#error').show();
      }
    }
  }
};
</script>
