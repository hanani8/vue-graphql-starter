<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-1"></div>
      <div class="column is-10">
        <div class="section content-title-group">
          <h2 class="title">Welcome</h2>
        </div>
        <div class="card edit-detail">
          <header class="card-header">
            <p
              class="card-header-title"
            >{{ coordinates.lat }} Latitude , {{coordinates.lng}} Longitude</p>
          </header>
          <div class="card-content" style="height: 500px">
            <div class="content">
              <div v-if="allset">
                <header>
                  <h1>SCSSSSS fucknig hell</h1>
                </header>
              </div>

              <!-- <div class="field">
                <label class="label" for="id">id</label>
                <label class="input" id="id" readonly>{{ hero.id }}</label>
              </div>
              <div class="field">
                <label class="label" for="firstName">first name</label>
                <input class="input" id="firstName" v-model="hero.firstName" />
              </div>
              <div class="field">
                <label class="label" for="lastName">last name</label>
                <input class="input" id="lastName" v-model="hero.lastName" />
              </div>
              <div class="field">
                <label class="label" for="description">description</label>
                <textarea class="input" id="description" type="text" v-model="hero.description" />
              </div>
              <div class="field">
                <label class="label">cape color</label>
                <label class="radio" for="color-red">
                  <input type="radio" id="color-red" value="red" v-model="hero.capeColor" />
                  red
                </label>
                <label class="radio" for="color-blue">
                  <input type="radio" id="color-blue" value="blue" v-model="hero.capeColor" />
                  blue
                </label>
                <label class="radio" for="color-green">
                  <input type="radio" id="color-green" value="green" v-model="hero.capeColor" />
                  green
                </label>
                <div class="color-line" :style="{ 'background-color': hero.capeColor }"></div>
              </div>-->

              <div class="field has-text-centered" style="margin-top: 10rem;">
                <label for="power">
                  <!-- Select topic -->
                  <div class="select is-primary is-rounded">
                    <select
                      id="topic"
                      v-model="hero.topic"
                      :class="{ invalid: !hero.topic }"
                      @keyup.esc="clearTopic"
                    >
                      <option disabled value>Please select one</option>
                      <option>Mathematics</option>
                      <option>Computer Science</option>

                      <option>Statistics for Data Science I</option>
                      <option>Computational Thinking</option>
                      <option>English I</option>

                    </select>
                  </div>
                </label>
              </div>
              <!-- <div class="field">
                <label class="checkbox" for="active">
                  Subscribe to hear latest news.
                  <input
                    type="checkbox"
                    class="is-primary"
                    id="active"
                    v-model="hero.active"
                  />
                </label>
              </div>-->
            </div>
          </div>
          <footer class="card-footer">
            <button class="link card-footer-item cancel-button" @click="cancelHero()">
              <i class="fas fa-undo"></i>
              <span>Cancel</span>
            </button>
            <button class="link card-footer-item" @click="saveHero()">
              <i class="fas fa-save"></i>
              <span>Go</span>
            </button>
          </footer>
        </div>
        <div class="notification is-info">
          <pre>{{ message }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ciao",
  data() {
    return {
      hero: {
        topic: ""
      },

      coordinates: {
        lat: 0,
        lng: 0
      },
      message: "",
      allset: false
    };
  },
  created() {
    //get user's coordinates from browsers request
    this.$getLocation({})
      .then(coordinates => {
        this.coordinates = coordinates;
        console.log(coordinates);
      })
      .catch(err => alert(err));
  },

  methods: {
    clearTopic() {
      this.hero.topic = "";
    },
    saveHero() {
      this.allset = false;

      // This only updates when you click the save button
      // this.message = JSON.stringify(this.hero, null, "\n ");
      // console.log(this.message);
      console.log(this.hero.topic);
      if (!this.hero.topic || !this.coordinates) {
        this.allset = true;
        console.log("fill it up");
      } else {
        this.allset = false;
        let topic = this.hero.topic;
        let lng = this.coordinates.lng;
        let lat = this.coordinates.lat;

        this.$router.push({
          path: `/rooms`,
          query: { topic: topic, lng: lng, lat: lat }
        });
      }
    }
  }
};
</script>

<style lang="scss" >
@import "@/design/index.scss";
</style>
