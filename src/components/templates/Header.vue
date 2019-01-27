<template>
  <nav class="navbar  navbar-expand-md fixed-top bg-white navbar-light py-sm-16">
    <div class="container">
      <router-link class="navbar-brand font-weight-bold text-primary" to="/" exact>Boilerplate</router-link>
      <span class="text-secondary d-none d-sm-block">Webpack + vue.js</span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse no-transition" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/style" exact>Styleguide</router-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              aria-expanded="true"
              aria-haspopup="true"
              data-toggle="dropdown"
              role="button"
              id="navbarDropdown"
            >Projects</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/projects/sendpal">SendPal</router-link>
            </div>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  watch: {
    $route() {
      $('.navbar-collapse').collapse('hide')
      $('ul.navbar-nav li.dropdown .dropdown-menu').removeClass('show')
    }
  },
  mounted: function() {
    $('ul.navbar-nav li.dropdown').hover(
      function() {
        $(this)
          .children('.dropdown-menu')
          .addClass('show')
      },
      function() {
        $(this)
          .children('.dropdown-menu')
          .removeClass('show')
      }
    );
  }
};
</script>

<style scoped>
.active:not(.navbar-brand) {
  color: gray;
}
.dropdown-menu {
  margin-top: 0;
}
.no-transition {
  transition: none !important;
}
</style>
