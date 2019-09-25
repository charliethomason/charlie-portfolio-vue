<template>
	<gallery title="Other" name="other" :works="other" />
</template>
<script>
import Gallery from '../../partials/gallery.vue';
import { other } from '../../data/other.json';

export default {
	name: 'Other',
	components: { Gallery },
	data() {
		return {
			other
		};
	}
};
</script>
