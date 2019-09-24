<template>
	<div>
		<h2 class="h2">Movies</h2>
		<gallery name="movies" :works="movies" />
	</div>	
</template>
<script>
import Gallery from '../../partials/gallery.vue';
import { movies } from '../../data/movies.json';

export default {
	name: 'Movies',
	components: { Gallery },
	data() {
		return {
			movies
		};
	}
};
</script>
