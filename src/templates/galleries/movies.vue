<template>
	<gallery title="Movies" name="movies" :works="movies" />
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
