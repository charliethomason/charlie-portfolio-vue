<template>
	<div>
		<h2 class="h2">Birds</h2>
		<gallery name="birds" :works="birds" />
	</div>	
</template>
<script>
import Gallery from '../../partials/gallery.vue';
import { birds } from '../../data/birds.json';

export default {
	name: 'Birds',
	components: { Gallery },
	data() {
		return {
			birds
		};
	}
};
</script>
