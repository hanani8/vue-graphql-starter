<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-2"></div>
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Welcome</h2>
        </div>
        <div class="card edit-detail">
          <header class="card-header">
            <p
              class="card-header-title"
            >{{ coordinates.lat }} Latitude , {{coordinates.lng}} Longitude</p>
          </header>
          <div class="card-content">
            <div class="content">
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
              <div class="field">
                <label for="power">
                  Select topic
                  <div class="select is-primary">
                    <select
                      id="power"
                      v-model="hero.power"
                      :class="{ invalid: !hero.power }"
                      @keyup.esc="clearPower"
                    >
                      <option disabled value>Please select one</option>
                      <option>Web</option>
                      <option>Flight</option>
                      <option>Strength</option>
                      <option>Invisibility</option>
                    </select>
                  </div>
                </label>
              </div>
              <div class="field">
                <label class="checkbox" for="active">
                  Subscribe Newsletter
                  <input
                    type="checkbox"
                    class="is-primary"
                    id="active"
                    v-model="hero.active"
                  />
                </label>
              </div>

<!--               
              <gmap-map
                :center="{lat:10, lng:10}"
                :zoom="7"
                map-type-id="terrain"
                style="width:640px; height:360px;"
              ></gmap-map> -->
            </div>
          </div>
          <footer class="card-footer">
            <button class="link card-footer-item cancel-button" @click="cancelHero()">
              <i class="fas fa-undo"></i>
              <span>Cancel</span>
            </button>
            <button class="link card-footer-item" @click="saveHero()">
              <i class="fas fa-save"></i>
              <span>Save</span>
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
        power: "",
        active: true
      },

      coordinates: {
        lat: 0,
        lng: 0
      },
      message: ""
    };
  },
  created() {
    //get user's coordinates from browsers request
    this.$getLocation({})
      .then(coordinates => {
        this.coordinates = coordinates;
      })
      .catch(err => alert(err));
  },

  methods: {
    cancelHero() {
      this.message = "";
    },
    clearPower() {
      this.hero.power = "";
    },
    saveHero() {
      // This only updates when you click the save button
      // this.message = JSON.stringify(this.hero, null, "\n ");
			// console.log(this.message);
      console.log(this.hero);
			
    }
  }
};
</script>