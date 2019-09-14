<template>
	<nav class="nav">
		<ul>
			<li v-for="(link, i) in navData.links" :class="{'active': link.href === active}">
				<a :href="`/${link.href}.html`">{{ link.name }}</a>
			</li>
		</ul>
	</nav>
</template>

<script>
import navData from '../data/nav.json';
export default {
	name: 'Nav',
	props: {
		active: {
			type: String,
			default: 'index'
		}
	},
	data() {
		return {
			navData
		};
	}
};
</script>
