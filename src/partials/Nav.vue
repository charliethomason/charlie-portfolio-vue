<template>
	<nav class="nav">
		<ul>
			<li v-for="(page, i) in pages" :class="{'active': page.href === active}">
				<a :href="`/${page.href}.html`">{{ page.name }}</a>
			</li>
		</ul>
	</nav>
</template>

<script>
import { pages } from '../data/pages.json';
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
			pages
		};
	}
};
</script>
