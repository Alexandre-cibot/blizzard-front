<template>
<section class="hero is-danger is-fullheight">
  <!-- Hero header: will stick at the top -->
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="../assets/img/logo.png" alt="Logo">
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
            <div v-if="myPersos.heroes">
              <ol>
                <li v-for="perso in myPersos.heroes">
                  {{ perso.id + " - " + perso.name + " - " + perso.level}}
                </li>
              </ol>
            </div>
            <div v-else>
              <img src="http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif" alt="">
            </div>
          </div>
        </div>
        <div class="card column">
          <div class="card-header">
            <p class="card-header-title" id="seasonChar">
              Seasons character
            </p>
          </div>
          <div class="card-content">
            <ol>
              <li v-for="perso in season">
                {{perso.player[0]}}
                <ul>
                  <li v-for="data in perso.player[0].data">
                    {{data.id}}
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
      <div class="columns">
        <div class="block column">
          <a class="button is-primary">Compare</a>
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
      data: '',
      myPersos: '',
      season: ''
    }
  },
  mounted() {
    this.getMyData(),
    this.getSeasonHero()
  },
  methods: {
    getMyData: function() {
      var self = this;
      console.log(this.$route.query);
      var url = 'https://symfony-blizzard.herokuapp.com/api/profile/' + this.$route.query.battleTag;
      fetch(url).then((response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
            self.myPersos = JSON.parse(data.data.body.contents);
          });
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
    },
    getSeasonHero: function() {
      var self = this;
      var url = 'https://symfony-blizzard.herokuapp.com/api/season/9/leaderboard/achievement-points';
      fetch(url).then((response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          // Examine the text in the response
          response.json().then(function(data) {
            self.season = JSON.parse(data.data.body.contents).row;
          });
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
    }
  }
}
</script>
