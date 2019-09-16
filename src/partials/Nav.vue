<template>
	<nav>
		<ul class="nav">
			<li v-for="(page, i) in pages">
				<a :href="`/${page.href}.html`" :class="linkClasses(page)">{{ page.name }}</a>
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
				'active': page.href === this.active
			};
		}
	}
};
</script>
