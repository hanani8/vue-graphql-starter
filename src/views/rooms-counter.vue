<template>
  <div class="content-container">
    <div class="column is-12">
      <div class="section content-title-group">
        <h2 class="title">Rooms</h2>
      </div>

      <div class="columns">
        <div class="column is-3">
          <header class="card-header has-text-centered">
            <p class="card-header-title">Rooms list</p>
          </header>

          <div v-if="loading" class="loading">Loading...</div>
          <div v-if="error" class="error">{{ error }}</div>
          <div v-if="queryRooms">
            <ul class="list is-hoverable has-text-centered">
              <li v-for="room of queryRooms" :key="room.id">
                <a
                  class="list-item"
                  @click="selectedRoom = room"
                  :class="{'is-active': selectedRoom == room}"
                >
                  <span>{{room.name}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div v-if="selectedRoom" class="column is-8">
          <header class="card-header">
            <p class="card-header-title">{{ selectedRoom.firstName }}</p>
          </header>
          <div class="card-content">
            <div class="content">
              <article class="message is-warning">
                <div class="message-header">
                  <p>About Us</p>
                </div>
                <div
                  class="message-body"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi, facilis laudantium eaque repudiandae optio asperiores quos cumque minus, officia at necessitatibus soluta ut odit incidunt sint blanditiis obcaecati inventore.</div>
              </article>

              <div class="field">
                <label class="label" for="id">id</label>
                <label class="input" id="id" readonly>{{ selectedRoom.id }}</label>
              </div>
              <div class="field">
                <label class="label" for="firstName">first name</label>
                <input class="input" id="firstName" v-model="selectedRoom.firstName" />
              </div>
              <div class="field">
                <label class="label" for="lastName">last name</label>
                <input class="input" id="lastName" v-model="selectedRoom.lastName" />
              </div>
              <div class="field">
                <label class="label" for="description">description</label>
                <input class="input" id="description" v-model="selectedRoom.description" />
              </div>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

const ROOMS_QUERY = gql`
  query queryMyRooms {
    queryRooms(
      coordinates: [$lng, $lat]
      selectedCurriculum: $topic
      maxDistance: 3000000000000000000000000000
    ) {
      name
    }
  }
`;

export default {
  name: "Rooms",
  data() {
    return {
      loading: false,
      queryRooms: null,
      error: null,
      alng: this.$route.query.lng,
     alat: this.$route.query.lat,
      atopic: this.$route.query.topic
      // selectedRoom: undefined,
    };
  },

  apollo: {
    queryRooms: {
      query: ROOMS_QUERY,
      variables() {
        return {
          lng: this.alng,
          lat: this.alat,
          topic: this.atopic
        };
      }
      //
    }
  },

  created() {
    console.log(this.$route.query.lng);
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },

  methods: {
    fetchData() {
      // this.error = this.queryRooms = null;
      console.log("fetch");

      this.loading = true;
    }
  }
};
</script>


