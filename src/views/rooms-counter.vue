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
          <ul class="list is-hoverable has-text-centered">
            <li v-for="room in queryRooms" :key="room.id">
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
        <div v-if="selectedRoom" class="column is-8">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

apollo: {
  queryRooms: ROOMS_QUERY;
}

export default {
  name: "Rooms",
  data() {
    return {
      // selectedRoom: undefined,
      // rooms: [
      //   {
      //     id: 10,
      //     firstName: "Ella",
      //     lastName: "Papa",
      //     description: "fashionista"
      //   },
      //   {
      //     id: 20,
      //     firstName: "Madelyn",
      //     lastName: "Papa",
      //     description: "the cat whisperer"
      //   },
      //   {
      //     id: 30,
      //     firstName: "Haley",
      //     lastName: "Papa",
      //     description: "pen wielder"
      //   },
      //   {
      //     id: 40,
      //     firstName: "Landon",
      //     lastName: "Papa",
      //     description: "arc trooper"
      //   }
      // ]
    };
  },
  beforeMount() {
    topic: this.$route.query.topic;
    lng: this.$route.lng;
    lat: this.$route.lat;

    const ROOMS_QUERY = gql`
      {
        queryRooms(
          coordinates: [lng, lat]
          selectedCurriculum: topic
          maxDistance: 3000000000000000000000000000
        ) {
          name
        }
      }
    `;
  },
  methods: {
    links() {
      console.log(this.$route.query);
    }
  }
};
</script>


