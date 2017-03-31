<template>
  <div class="hero is-fullheight">
    <div class="login-page-wrapper hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title">
              Comparateur Diablo 3
            </h1>
            <div class="box">
              <label class="label">Entre ton battle.net tag</label>
              <p class="control">
                <input class="input" type="text" v-model="battleNetTag" placeholder="Unic-21493" @keyup.13="submitForm">
              </p>
              <hr>
              <p class="control">
                <button class="button is-primary" @click="submitForm">Login</button>
                <button class="button is-default" @click="clearInput">Clear</button>
              </p>
            </div>
            <p class="has-text-centered">
              <a href="https://eu.battle.net/d3/fr/" target="_blank">Register on official website</a>
              |
              <a href="https://github.com/Alexandre-cibot/blizzard-front/" target="_blank">View GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        msg: 'Page de Login',
        battleNetTag: "",
      }
    },
    methods: {
      submitForm() {
        console.log('Form submited');
        let input_data = this.battleNetTag.trim();
        if (!input_data.length) {
          console.log('Empty field');
          return;
        }
        this.$router.push(
          {
            path: "/comparator",
            query: {
              battleTag: this.battleNetTag.trim(),
            },
          }
        );
      },
      clearInput() {
        this.battleNetTag = "";
      }
    }
  }
</script>

<style lang="css">
  .login-page-wrapper {
    /*background-image: url('../assets/img/bg_diablo.jpg');*/
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
