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
  <button type="button" name="button" v-on:click="getMyData"> FETCH</button>
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
            <p class="card-header-title" id="seasonChar">
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
  mounted() {
    this.getMyData()
  },
  methods: {
    getMyData: function() {
        console.log(this.$route.query);return;
        var url = 'https://symfony-blizzard.herokuapp.com/api/profile/Unic-21493/hero/90545425';
        fetch(url).then((response) => {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }
            // Examine the text in the response
            response.json().then(function(data) {
              // console.log(data);
              console.log(JSON.parse(data.data.contents))
            });
          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
    }
  }
}
</script>
