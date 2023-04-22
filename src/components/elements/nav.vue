<template>
	<nav>
		<ul class="nav">
			<li v-for="(page, i) in pages" :key="i">
				<router-link :to="page.path" :class="linkClasses(page)">{{ page.name }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
import data from '../../data/pages.json';
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
			pages: data.pages
		};
	},
	methods: {
		linkClasses(page) {
			return {
				'nav__link': true,
				'nav__link--active': page.id === this.active
			};
		}
	}
};
</script>
