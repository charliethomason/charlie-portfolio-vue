<template>
	<div>
		<h2 class="h2">Movies</h2>
		<gallery />
	</div>	
</template>
<script>
import Gallery from '../../partials/gallery.vue';

export default {
	name: 'Movies',
	components: { Gallery }
};
</script>
