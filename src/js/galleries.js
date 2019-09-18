import Galleries from '../templates/galleries/galleries.vue';
import Birds from '../templates/galleries/birds.vue';
import Movies from '../templates/galleries/movies.vue';
import Other from '../templates/galleries/other.vue';

const routes = [
	{ path: '/', component: Galleries },
	{ path: '/birds', component: Birds },
	{ path: '/movies', component: Movies },
	{ path: '/other', component: Other }
];

export default routes;