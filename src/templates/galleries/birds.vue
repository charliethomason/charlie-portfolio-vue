<template>
	<gallery title="Birds" name="birds" :works="birds" />
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
