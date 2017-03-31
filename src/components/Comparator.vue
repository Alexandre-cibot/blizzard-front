<template>
<section class="hero is-danger is-fullheight">
  <!-- Hero header: will stick at the top -->
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="images/bulma-type-white.png" alt="Logo">
          </a>
        </div>
      </div>
    </header>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body container">
    <div class="container">
      <div class="columns">
        <div class="card column">
          <div class="card-header">
            <p class="card-header-title" id="userChar">
              Your character
            </p>
          </div>
          <div class="card-content">
            lorem
          </div>
        </div>
        <div class="card column">
          <div class="card-header">
            <p class="card-header-title" id="seasonChar" v-on:click="start">
              Seasons character
              <ol>
                <li v-for="char in data">
                </li>
              </ol>
            </p>
          </div>
          <div class="card-content">
            lorem
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script type="text/javascript">
export default {
  name: 'api',
  data() {
    return {
      data: ''
    }
  },
  methods: {
    start: function() {
      var self = this;
      var url = 'https://symfony-blizzard.herokuapp.com/profile/Unic-21493/hero/90545425'
      fetch(url)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        self.data = data;
      })
    }
  }
}
</script>
