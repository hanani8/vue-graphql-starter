<template>
	<main>
		<h1>I Am Blog2!</h1>
		  <ul v-for="book of getRooms" :key="book.id">
      <Post :title="book.name" :author="book.admin"></Post>
    </ul>

		<!-- <section v-if="!$supply.Posts.ready" class="loading">Loading...</section>

		<section v-for="post of $supply.Posts.posts" :key="post.id" class="posts">
			<Post :title="post.title" :author="post.author.name"></Post>
		</section> -->
	</main>
</template>

<script>
import Post from './Post.vue'
import gql from "graphql-tag";
// const BOOKS_QUERY = gql`
//   {
//     books {
//       name
//       genre
//       pages
//       author {
//         name
//         gender
//         age
//       }
//     }
//   }
// `;

const ROOMS_QUERY = gql`
  {
    getRooms {
      name
      admin
    }
  }
`;

import { use } from 'vue-supply'

export default {
	components: {
		Post,
	},
	 apollo: {
		// books: BOOKS_QUERY,
		getRooms: ROOMS_QUERY
		
  }

	// Declares that this component needs the 'Posts'
	// supply to be active
	// mixins: [use('Posts')],
}
</script>
