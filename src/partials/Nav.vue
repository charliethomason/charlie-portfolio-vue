<template>
	<nav>
		<ul class="nav">
			<li v-for="(page, i) in pages" :key="i">
				<a :href="page.path" :class="linkClasses(page)">{{ page.name }}</a>
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
	},
	methods: {
		linkClasses(page) {
			return {
				'link': true,
				'active': page.id === this.active
			};
		}
	}
};
</script>
