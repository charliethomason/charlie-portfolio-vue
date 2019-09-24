<template>
	<div>
		<h2 class="h2">Other</h2>
		<gallery name="other" :works="other" />
	</div>	
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
