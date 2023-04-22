import Homepage from '../partials/home-content.vue';
import Galleries from '../templates/galleries/galleries.vue';
import Collection from '../templates/galleries/collection.vue';

const routes = [
	{ path: '/', component: Homepage },
	{ path: '/art', component: Galleries },
	{ path: '/art/inktober2022', component: Collection },
	{ path: '/art/inktober2021', component: Collection },
	{ path: '/art/inktober2020', component: Collection },
	{ path: '/art/birdsofchicagoland', component: Collection },
	{ path: '/art/birds', component: Collection },
	{ path: '/art/movies', component: Collection },
	{ path: '/art/other', component: Collection }
];

export default routes;