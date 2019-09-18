import birds from '../templates/galleries/birds.vue';
import movies from '../templates/galleries/movies.vue';
import other from '../templates/galleries/other.vue';

const routes = [
	{ path: '/birds', component: birds },
	{ path: '/movies', component: movies },
	{ path: '/other', component: other }
];

export default routes;