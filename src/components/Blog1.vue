<template>
  <main>
    <h1>I Am Blog1!</h1>
    <!-- <ul v-for="book of books" :key="book.id">
      <li>{{book.pages}}</li>
    </ul> -->
<!-- 
    <section v-if="loading" class="loading">Loading...</section>

    <section v-for="post of posts" :key="post.id" class="posts">
      <Post :title="post.title" :author="post.author.name"></Post>
    </section> -->
		 <ul v-for="book of books" :key="book.id">
      <Post :title="book.name" :author="book.author.name"></Post>
    </ul>

  </main>
</template>

<script>
import Post from "./Post.vue";
// import POSTS_QUERY from '../graphql/posts.gql'
import gql from "graphql-tag";

const BOOKS_QUERY = gql`
  {
    books {
      name
      genre
      pages
      author {
        name
        gender
        age
      }
    }
  }
`;

export default {
  components: {
    Post
  },

  data() {
    return {
      posts: [],
      loading: 0
    };
  },

  // Fetch posts with apollo
  apollo: {
    posts: {
      query: BOOKS_QUERY
      // This will increment `loading` prop
      // when the query is loading
      // then will decrement it when it's done
      // So you should display loading message
      // when `loading` isn't equal to 0
      // loadingKey: 'loading',
      // Short-polling
      // pollInterval: 500,
    }
  }
};
</script>
